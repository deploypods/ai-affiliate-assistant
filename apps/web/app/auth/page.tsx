"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthForm from "@/components/ui/auth-form";

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

        <h1 className="sr-only">Authenticate</h1>

        <Tabs defaultValue="sign-in" className="w-full flex justify-center">
          <TabsList className="mb-6">
            <TabsTrigger value="sign-in">Sign in</TabsTrigger>
            <TabsTrigger value="sign-up">Sign up</TabsTrigger>
          </TabsList>

          <div className="w-full flex justify-center">
            <TabsContent value="sign-in" className="w-full flex justify-center">
              <AuthForm mode="sign-in" />
            </TabsContent>
            <TabsContent value="sign-up" className="w-full flex justify-center">
              <AuthForm mode="sign-up" />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
