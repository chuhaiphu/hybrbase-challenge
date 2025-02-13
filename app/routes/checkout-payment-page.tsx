import type { Route } from "./+types/home-page";
import FooterComponent from "~/components/footer/footer";
import CheckoutPaymentComponent from "~/components/checkout/checkout-payment";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Checkout Payment" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutPaymentPage() {
  return (
    <>
      <CheckoutPaymentComponent />
      <FooterComponent />
    </>
  )
}