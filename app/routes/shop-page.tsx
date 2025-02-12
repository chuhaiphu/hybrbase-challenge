import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import TestimonialComponent from "~/components/testimonial/testimonial";
import CategoryComponent from "~/components/category/category";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ShopPage() {
  return (
    <>
      <HeaderComponent isDarkTheme={true} />
      <TestimonialComponent />
      <CategoryComponent />
      <FooterComponent />
    </>
  )
}
