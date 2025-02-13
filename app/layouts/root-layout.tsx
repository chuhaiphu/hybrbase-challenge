import HeaderComponent from "~/components/header/header";
import { Outlet } from "react-router";
import CartFloatingComponent from "~/components/cart/cart-floating";

export default function RootLayout({ isDarkTheme = false }) {
  return (
    <>
      <HeaderComponent isDarkTheme={isDarkTheme} />
      <main>
        <CartFloatingComponent />
        <Outlet />
      </main>
    </>
  );
}