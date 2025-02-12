import type { Route } from "./+types/home-page";
import HeaderComponent from "~/components/header/header";
import FooterComponent from "~/components/footer/footer";
import ItemDetailComponent from "~/components/item-detail/item-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ProductDetailPage() {
  return (
    <>
      <HeaderComponent isDarkTheme={true} />
      <ItemDetailComponent />
      <FooterComponent />
    </>
  )
}
