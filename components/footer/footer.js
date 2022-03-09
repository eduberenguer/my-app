import footer from "./footer.module.css";

export function Footer() {
  return (
    <footer className={footer.container}>
      <p className={footer.copyright}>
        © Copyright 2022 salesforce.com, inc.
        <a href="https://www.salesforce.com/company/legal/intellectual/">
          Reservados todos los derechos.
        </a>
      </p>
      <p className={footer.copyright}>
        Las distintas marcas comerciales pertenecen a sus respectivos
        propietarios
      </p>
      <p className={footer.copyright}>
        <a href="https://www.salesforce.com/es/">Salesforse Spain S.L. ,</a>
        Paseo de la Castellana 79, Planta 7ª, Madrid, Spain, 28046
      </p>
    </footer>
  );
}
