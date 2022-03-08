import { useRouter } from 'next/router';
import React from 'react';
import {
  createContact,
  deleteContact,
  editContact,
  getAllContacts,
  getToken,
} from '../services/api-connection';

const Page = ({ data, token }) => {
  const router = useRouter();
  const deleteAccount = async (url) => {
    const id = url.split(`Contact/`)[1];
    await deleteContact(id, token);
  };

  const refreshSSProps = () => {
    router.replace(router.asPath);
  };

  return (
    <div>
      <form
        onSubmit={(e) => createContact(e, token).then(() => refreshSSProps())}
      >
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' autoComplete='name' required />
        <button type='submit'>Create</button>
      </form>
      {data &&
        data.records &&
        data.records.map((item) => {
          return (
            <div key={item.attributes.url}>
              <p>--------------------</p>
              <p>{item.Name}</p>
              <button
                onClick={() =>
                  deleteAccount(item.attributes.url).then(() =>
                    refreshSSProps()
                  )
                }
              >
                Borrar
              </button>
              <form
                onSubmit={(e) =>
                  editContact(e, item.attributes.url, token).then(() =>
                    refreshSSProps()
                  )
                }
              >
                <label htmlFor='name'>New Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  autoComplete='name'
                  required
                />
                <button type='submit'>Edit</button>
              </form>
            </div>
          );
        })}
    </div>
  );
};

// Método para que me devuelva los datos de la API:

export const getServerSideProps = async () => {
  const token = await getToken();
  const data = await getAllContacts();

  return { props: { data, token } };
};

export default Page;
