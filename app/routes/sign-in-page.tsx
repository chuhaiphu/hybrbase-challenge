import type { Route } from "./+types/home-page";
import SignInComponent from "~/components/auth/auth-signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignInPage() {
  return (
    <>
      <SignInComponent />
    </>
  )
}
