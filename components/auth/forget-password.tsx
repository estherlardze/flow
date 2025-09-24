"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from "@/schema/auth.schema";

export function ForgotPassword() {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full flex justify-center items-center md:w-1/2 bg-white p-8 overflow-y-auto">
        <div className="w-full mx-auto my-12">
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-2xl text-gray-900 font-bold">
              Forget Password
            </h1>
            <p className="text-gray-500 text-sm">
              Enter your email to reset your password
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-w-lg mx-auto"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="abigail.anderson@me.com"
                        {...field}
                        className="rounded-2xl w-full"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full py-6 bg-gray-900 cursor-pointer text-white rounded-2xl hover:bg-gray-800 transition"
              >
                Send Reset Link
              </Button>

              <div className="flex justify-center gap-1 items-center">
                <p className="text-center text-sm text-gray-600">
                  Remember your password?
                </p>
                <Link
                  href="/login"
                  className="text-teal-700 hover:underline text-sm"
                >
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div
        className="hidden md:flex w-1/2 fixed bg-gray-900 text-white items-center justify-center p-8 right-0 top-0 bottom-0"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/95"></div>
        <div className="text-center max-w-md relative">
          <h3 className="text-4xl font-semibold mb-2">
            Very simple way you can engage
          </h3>
          <p className="text-gray-200 mt-4 text-lg">
            Welcome to Leadflow Customer Relationship Management. Efficiently
            track and manage your Leads with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
