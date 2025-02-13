import type { Route } from "./+types/home-page";
import FooterComponent from "~/components/footer/footer";
import CheckoutShippingComponent from "~/components/checkout/checkout-shipping";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Checkout Shipping" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutShippingPage() {
  return (
    <>
      <CheckoutShippingComponent />
      <FooterComponent />
    </>
  )
}
