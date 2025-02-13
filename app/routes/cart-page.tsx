import type { Route } from "./+types/home-page";
import FooterComponent from "~/components/footer/footer";
import CartDetailComponent from "~/components/cart/cart-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CartPage() {
  return (
    <>
      <CartDetailComponent />
      <FooterComponent />
    </>
  )
}
