import edit from "./formEdit.module.css";

export default function FormEdit({ editContact }) {
  return (
    <form
      className={edit.container}
      onSubmit={(e) =>
        editContact(e, item.attributes.url, token).then(() => refreshSSProps())
      }
    >
      <label htmlFor="name">New Name</label>
      <input
        className={edit.name}
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />
      <button className={edit.button} type="submit">
        Edit
      </button>
    </form>
  );
}
