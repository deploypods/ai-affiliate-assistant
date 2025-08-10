"use server";

function isValidEmail(email: string) {
  // Simple RFC5322-ish check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export type WaitlistResult = {
  ok: boolean;
  message?: string;
  error?: string;
};

export async function joinWaitlist(
  _prevState: WaitlistResult | false,
  formData: FormData
): Promise<WaitlistResult> {
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    return { ok: false, message: "", error: "Please enter your email." };
  }
  if (!isValidEmail(email)) {
    return {
      ok: false,
      message: "",
      error: "Please enter a valid email address.",
    };
  }

  // Simulate async persistence or webhook call
  await new Promise((r) => setTimeout(r, 600));

  // In production, forward to your CRM, email list, or database here.
  console.log("[Waitlist] New signup:", { email });

  return { ok: true, message: "Thanks! You’re on the Convertly waitlist." };
}
