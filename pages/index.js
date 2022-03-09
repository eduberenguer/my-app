import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../components/layout/layout";
import {
  createContact,
  deleteContact,
  editContact,
  getAllContacts,
  getToken,
} from "../services/api-connection";
import FormCreate from "./form-create/formCreate";
import FormEdit from "./form-edit/formEdit";
import home from "../styles/Home.module.css";

const Page = ({ data, token }) => {
  const router = useRouter();

  const refreshSSProps = () => {
    router.replace(router.asPath);
  };

  return (
    <Layout>
      <FormCreate
        createContact={createContact}
        refreshSSProps={refreshSSProps}
        token={token}
      ></FormCreate>
      <div className={home.container}>
        {data &&
          data.records &&
          data.records.map((item) => {
            return (
              <div className={home.user} key={item.attributes.url}>
                <p>--------------------</p>
                <p className={home.name}>{item.Name}</p>
                <button
                  className={home.button}
                  onClick={() =>
                    deleteContact(item.attributes.url, token).then(() =>
                      refreshSSProps()
                    )
                  }
                >
                  Borrar
                </button>
              </div>
            );
          })}
      </div>
      <FormEdit editContact={editContact}></FormEdit>
    </Layout>
  );
};

// Método para que me devuelva los datos de la API:

export const getServerSideProps = async () => {
  const token = await getToken();
  const data = await getAllContacts();

  return { props: { data, token } };
};

export default Page;
