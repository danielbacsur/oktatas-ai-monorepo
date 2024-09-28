"use server";

import { signOut } from "next-auth/react";
import { signIn } from "@/utils/auth";

export async function signInWithGoogle() {
  return await signIn("google");
}

export async function signOutUser() {
  return await signOut();
}
