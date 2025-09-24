"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import { SignupFormValues, signupSchema } from "@/schema/auth.schema";

export function SignupPage() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-xl w-full space-y-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-2xl text-gray-900 font-bold">
              Welcome to Leadflow
            </h1>
            <p className="text-gray-500 text-sm">Create an account</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Abigail"
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
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Anderson"
                          {...field}
                          className="rounded-2xl"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={() => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Controller
                        name="phone"
                        control={form.control}
                        render={({ field }) => (
                          <PhoneInput
                            {...field}
                            international
                            defaultCountry="GH"
                            placeholder="Enter phone number"
                            className="rounded-2xl border border-gray-300 px-3 py-3 w-full"
                          />
                        )}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

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
                    <FormLabel>Password</FormLabel>
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
                className="w-full py-6 bg-slate-900 cursor-pointer text-white rounded-2xl hover:bg-gray-800 transition"
              >
                Create Account
              </Button>

              <div className="flex justify-center gap-1 items-center">
                <p className="text-center text-sm text-gray-600">
                  Already have an account?
                </p>
                <Link
                  href="/login"
                  className="text-teal-700 hover:underline text-sm"
                >
                  Login
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
