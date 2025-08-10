"use client";

export default function AuthPage() {
  return (
    <main className="min-h-[100dvh] bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600 grid place-items-center text-white font-bold">
            C
          </div>
          <span className="text-lg font-semibold">Convertly</span>
        </div>

        <h1 className="sr-only">Authenticated Successfully</h1>
      </div>
    </main>
  );
}
