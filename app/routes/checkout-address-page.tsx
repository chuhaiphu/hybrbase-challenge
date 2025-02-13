import type { Route } from "./+types/home-page";
import FooterComponent from "~/components/footer/footer";
import CheckoutAddressComponent from "~/components/checkout/checkout-address";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Checkout Address" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutAddressPage() {
  return (
    <>
      <CheckoutAddressComponent />
      <FooterComponent />
    </>
  )
}
