"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistResult } from "@/app/action/waitlist";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type State = WaitlistResult | { ok: boolean; message?: string; error?: string };

export default function WaitlistForm() {
  const initialState: State = { ok: false, message: "", error: "" };
  const [state, formAction, isPending] = useActionState<State, FormData>(
    joinWaitlist,
    initialState
  );

  return (
    <div>
      <form
        action={formAction}
        className="mt-2 flex w-full max-w-md items-center gap-2"
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          className="h-11"
          disabled={isPending}
          aria-invalid={state.ok === false && !!state.error}
          aria-describedby="waitlist-status"
        />
        <Button
          type="submit"
          className="h-11 bg-slate-900 hover:bg-slate-800"
          disabled={isPending}
        >
          {isPending ? "Submitting…" : "Join waitlist"}
        </Button>
      </form>
      <div id="waitlist-status" className="mt-2 min-h-5 text-sm">
        {state?.ok && state.message ? (
          <p className="text-emerald-600">{state.message}</p>
        ) : state?.ok === false && state.error ? (
          <p className="text-rose-600">{state.error}</p>
        ) : null}
      </div>
    </div>
  );
}
