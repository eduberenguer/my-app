import create from "./formCreate.module.css";

export default function FormCreate({ createContact, refreshSSProps, token }) {
  return (
    <form
      className={create.container}
      onSubmit={(e) => createContact(e, token).then(() => refreshSSProps())}
    >
      <label className={create.name} htmlFor="name">
        Name
      </label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button className={create.button} type="submit">
        Create
      </button>
    </form>
  );
}
