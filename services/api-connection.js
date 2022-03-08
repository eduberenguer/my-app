export const getToken = async () => {
  const url = 'https://login.salesforce.com/services/oauth2/token';
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Accept', 'application/json');

  let urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'password');
  urlencoded.append(
    'client_id',
    '3MVG9t0sl2P.pByqjwU1VYfF7EEJ7rRTcnmB7soewsYGvkKw2ENlww7V_NCbQF11IGKChBC7mmWvllM92TUCX'
  );
  urlencoded.append(
    'client_secret',
    'C15623E57349D2FFCAE72BAE8047504DAF6343D1DFF1BF6442D14BA2F260D02C\n'
  );
  urlencoded.append('username', 'eduardo.berenguer@playful-raccoon-kmmjx6.com');
  urlencoded.append('password', 'Sumadre90ouzrwT5lsyFIGhU0pD4JVIFH');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  return await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => result.access_token)
    .catch((error) => console.log('error', error));
};

export const getAllContacts = async () => {
  const token = await getToken();
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/query/?q=SELECT FIELDS(All) FROM Contact LIMIT 200',
    requestOptions
  );

  const data = await response.json();

  return data;
};

export const createContact = async (event, token) => {
  event.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const raw = JSON.stringify({
    lastName: event.target.name.value,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    `https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Contact/`,
    requestOptions
  )
    .then(() => (event.target.name.value = ''))
    .catch((error) => console.error('error', error));
};

export const editContact = async (event, url, token) => {
  const id = url.split(`Contact/`)[1];
  event.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const raw = JSON.stringify({
    lastName: event.target.name.value,
  });

  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    `https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Contact/${id}`,
    requestOptions
  )
    .then(() => (event.target.name.value = ''))
    .catch((error) => console.log('error', error));
};

export const deleteContact = async (id, token) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow',
  };

  return fetch(
    `https://playful-raccoon-kmmjx6-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Contact/${id}`,
    requestOptions
  ).catch((error) => console.log('error', error));
};
