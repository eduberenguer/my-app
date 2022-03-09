export function Contact({ item, token, deleteContact, editContact }) {
  return (
    <div>
      <p>--------------------</p>
      <p>{item.Name}</p>
      <button
        onClick={() =>
          deleteContact(item.attributes.url, token).then(() => refreshSSProps())
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
        <label htmlFor="name">New Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
