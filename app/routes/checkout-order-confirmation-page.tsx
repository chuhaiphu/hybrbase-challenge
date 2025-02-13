import type { Route } from "./+types/home-page";
import FooterComponent from "~/components/footer/footer";
import CheckoutOrderConfirmationComponent from "~/components/checkout/checkout-order-confirmation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Checkout Payment" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutPaymentPage() {
  return (
    <>
      <CheckoutOrderConfirmationComponent />
      <FooterComponent />
    </>
  )
}