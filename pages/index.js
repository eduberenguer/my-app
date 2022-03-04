import React from "react";

const Page = ({ data }) => {
  console.log(data);
  const deleteAccount = (url) => {
    const id = url.split(`Contact/`)[1];
    deleteAccountinSalesforce(id);
  };

  const createUser = async (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer 00D7Q000003RTF1!AQ0AQKOXfPcfPkmHhDMSpfGYnUYH8adI4h4Pf2iLklz2cJHwAS6vjbFyYlLYKlNT3zJmDxypDCib5a71dSQZNW3IqxMtlo9B"
    );

    const raw = JSON.stringify({
      lastName: event.target.name.value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Contact/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const editUser = async (event, url) => {
    const id = url.split(`Contact/`)[1];
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer 00D7Q000003RTF1!AQ0AQKOXfPcfPkmHhDMSpfGYnUYH8adI4h4Pf2iLklz2cJHwAS6vjbFyYlLYKlNT3zJmDxypDCib5a71dSQZNW3IqxMtlo9B"
    );

    const raw = JSON.stringify({
      lastName: event.target.name.value,
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Contact/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Create</button>
      </form>
      {data.records.map((item) => {
        return (
          <div key={item.attributes.url}>
            <p>--------------------</p>
            <p>{item.Name}</p>
            <button onClick={() => deleteAccount(item.attributes.url)}>
              Borrar
            </button>
            <form onSubmit={(e) => editUser(e, item.attributes.url)}>
              <label htmlFor="name">New Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
              <button type="submit">Edit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

// Método para que me devuelva los datos de la API:
// const Index = async () => {
//   const url = "https://login.salesforce.com/services/oauth2/token";
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//   myHeaders.append("Accept", "application/json");

//   let urlencoded = new URLSearchParams();
//   urlencoded.append("grant_type", "password");
//   urlencoded.append(
//     "client_id",
//     "3MVG9t0sl2P.pByqjwU1VYfF7EEJ7rRTcnmB7soewsYGvkKw2ENlww7V_NCbQF11IGKChBC7mmWvllM92TUCX"
//   );
//   urlencoded.append(
//     "client_secret",
//     "C15623E57349D2FFCAE72BAE8047504DAF6343D1DFF1BF6442D14BA2F260D02C\n"
//   );
//   urlencoded.append("username", "eduardo.berenguer@playful-raccoon-kmmjx6.com");
//   urlencoded.append("password", "Sumadre90ouzrwT5lsyFIGhU0pD4JVIFH");

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: urlencoded,
//     redirect: "follow",
//   };

//   await fetch(url, requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// };

export const deleteAccountinSalesforce = (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer 00D7Q000003RTF1!AQ0AQKOXfPcfPkmHhDMSpfGYnUYH8adI4h4Pf2iLklz2cJHwAS6vjbFyYlLYKlNT3zJmDxypDCib5a71dSQZNW3IqxMtlo9B"
  );

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Contact/${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getServerSideProps = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer 00D7Q000003RTF1!AQ0AQKOXfPcfPkmHhDMSpfGYnUYH8adI4h4Pf2iLklz2cJHwAS6vjbFyYlLYKlNT3zJmDxypDCib5a71dSQZNW3IqxMtlo9B"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/query/?q=SELECT FIELDS(All) FROM Contact LIMIT 200",
    requestOptions
  );

  const data = await response.json();

  return { props: { data } };
};

export default Page;
