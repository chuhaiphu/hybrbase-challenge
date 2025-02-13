import { useLoaderData } from "react-router";
import type { Route } from "./+types/home-page";
import FooterComponent from "~/components/footer/footer";
import ItemDetailComponent from "~/components/item-detail/item-detail";
import { useQuery } from "convex/react";
import { api } from "convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clothes" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function loader({ params }: Route.LoaderArgs) {
  const productId = params.productId as Id<"clothes">;
  return { productId };
}

export default function ProductDetailPage() {
  const { productId } = useLoaderData<typeof loader>();
  const item = useQuery(api.clothes.getClothesById, { 
    id: productId 
  });
  return (
    <>
      <ItemDetailComponent item={item} />
      <FooterComponent />
    </>
  )
}
