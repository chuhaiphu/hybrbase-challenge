import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/root-layout.tsx",[
    index("routes/home-page.tsx"), 
    route("shop", "routes/shop-page.tsx"), 
    route("product/:productId", "routes/product-detail-page.tsx"),
    route("cart", "routes/cart-page.tsx"),
    route("checkout/address", "routes/checkout-address-page.tsx"),
    route("checkout/shipping", "routes/checkout-shipping-page.tsx"),
    route("checkout/payment", "routes/checkout-payment-page.tsx"),
    route("checkout/order-confirmation", "routes/checkout-order-confirmation-page.tsx"),
    route("sign-in", "routes/sign-in-page.tsx"),
    route("register", "routes/register-page.tsx"),
  ])
] satisfies RouteConfig;
