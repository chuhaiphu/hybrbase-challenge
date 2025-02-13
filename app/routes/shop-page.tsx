import type { Route } from "./+types/home-page";
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
      <TestimonialComponent />
      <CategoryComponent />
      <FooterComponent />
    </>
  )
}
