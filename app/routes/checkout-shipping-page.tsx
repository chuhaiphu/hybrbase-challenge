import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import CheckoutShippingComponent from "~/components/checkout/checkout-shipping";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutShippingPage() {
  return (
    <>
      <HeaderComponent isDarkTheme={true} />
      <CheckoutShippingComponent />
      <FooterComponent />
    </>
  )
}
