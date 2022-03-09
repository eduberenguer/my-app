import { useRouter } from "next/router";
import React from "react";
import {
  createContact,
  deleteContact,
  editContact,
  getAllContacts,
  getToken,
} from "../services/api-connection";

const Page = ({ data, token }) => {
  const router = useRouter();

  const refreshSSProps = () => {
    router.replace(router.asPath);
  };

  return <div></div>;
};

// Método para que me devuelva los datos de la API:

export const getServerSideProps = async () => {
  const token = await getToken();
  const data = await getAllContacts();

  return { props: { data, token } };
};

export default Page;
