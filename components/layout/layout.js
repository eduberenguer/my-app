import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export function Layout({ children }) {
  const salesForce = [{ path: "/", label: "Inicio" }];

  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
