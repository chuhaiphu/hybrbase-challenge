import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import BentoGridComponent from "~/components/hero/bento-grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <BentoGridComponent />
    </>
  )
}
