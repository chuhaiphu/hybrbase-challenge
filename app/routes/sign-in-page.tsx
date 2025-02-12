import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import BentoGridComponent from "~/components/hero/bento-grid";
import SignInComponent from "~/components/auth/auth-signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignInPage() {
  return (
    <>
      <HeaderComponent />
      <SignInComponent />
    </>
  )
}
