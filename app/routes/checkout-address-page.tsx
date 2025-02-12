import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import CartDetailComponent from "~/components/cart/cart-detail";
import CheckoutAddressComponent from "~/components/checkout/checkout-address";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutAddressPage() {
  return (
    <>
      <HeaderComponent isDarkTheme={true} />
      <CheckoutAddressComponent />
      <FooterComponent />
    </>
  )
}
