import header from "./header.module.css";

export function Header() {
  return (
    <header className={header.container}>
      <img
        className={header.img}
        src="https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.png"
        alt="logo"
      />
      <h1 className={header.title}>Welcome to SalesForce</h1>
    </header>
  );
}
