import RegisterComponent from "~/components/auth/auth-register";
import type { Route } from "./+types/home-page";
import SignInComponent from "~/components/auth/auth-signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function RegisterPage() {
  return (
    <>
      <RegisterComponent />
    </>
  )
}
