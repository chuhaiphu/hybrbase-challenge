import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import CheckoutPaymentComponent from "~/components/checkout/checkout-payment";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CheckoutPaymentPage() {
  return (
    <>
      <HeaderComponent isDarkTheme={true} />
      <CheckoutPaymentComponent />
      <FooterComponent />
    </>
  )
}