"use client";

import { useState, useEffect } from "react";
import { useUser, useAuth } from "@/firebase";
import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, MailCheck, ShieldAlert } from "lucide-react";

export default function VerifyPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isResending, setIsResending] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push("/login");
    }
    if (user?.emailVerified) {
      router.push("/");
    }
  }, [user, isUserLoading, router]);

  const handleResend = async () => {
    if (!user) return;
    setIsResending(true);
    try {
      await sendEmailVerification(user);
      toast({
        title: "Verification sent",
        description: "Check your email for the verification link.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = () => {
    // Simulated OTP verification as Firebase standard uses links.
    // For this prototype, we'll "verify" if they click verify after entering anything.
    toast({
      title: "Checking OTP...",
      description: "Note: In this prototype, we use standard Firebase email links. Please check your email inbox.",
    });
  };

  if (isUserLoading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center items-center">
      <Card className="w-full max-w-md border-none shadow-xl text-center">
        <CardHeader>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MailCheck className="text-primary h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
          <CardDescription>
            We sent a verification code to <span className="font-bold text-foreground">{user?.email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between gap-2 max-w-[280px] mx-auto">
            {otp.map((digit, i) => (
              <Input
                key={i}
                id={`otp-${i}`}
                type="text"
                inputMode="numeric"
                className="w-10 h-12 text-center text-xl font-bold focus:border-primary"
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
              />
            ))}
          </div>
          <div className="bg-muted/50 p-4 rounded-xl flex items-start gap-3 text-left">
            <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              Firebase standard email auth uses a verification link sent to your inbox. Entering any 6 digits above and clicking verify will simulate the flow for this prototype.
            </p>
          </div>
          <Button className="w-full h-11" onClick={handleVerifyOtp}>Verify Code</Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Didn't receive the email?</p>
          <Button variant="outline" onClick={handleResend} disabled={isResending}>
            {isResending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Resend Verification"}
          </Button>
          <Button variant="ghost" onClick={() => router.push("/")} className="mt-2">Skip for now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
