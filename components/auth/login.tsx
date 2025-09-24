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
import { LoginFormValues, loginSchema } from "@/schema/auth.schema";

export function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full flex justify-center items-center md:w-1/2 bg-white p-8 overflow-y-auto">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-2xl text-gray-900 font-bold">Welcome Back</h1>
            <p className="text-gray-500 text-sm">
              Login to your leadflow account
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        className="rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="text-teal-700 hover:underline text-sm"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                        className="rounded-2xl"
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
                Login
              </Button>

              <div className="flex justify-center gap-1 items-center">
                <p className="text-center text-sm text-gray-600">
                  Don't have an account?
                </p>
                <Link
                  href="/sign-up"
                  className="text-teal-700 hover:underline text-sm"
                >
                  Signup
                </Link>
              </div>

              <div className="text-xs flex text-gray-600 text-center justify-center space-x-1">
                <p>By clicking continue, you agree to our </p>
                <Link
                  href="#"
                  className="underline hover:text-gray-900 transition-all duration-100"
                >
                  Terms of Service
                </Link>
                <span> and</span>
                <Link
                  href="#"
                  className="underline hover:text-gray-900 transition-all duration-100"
                >
                  Privacy Policy
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
