export function Form({ token, createContact, refreshSSProps }) {
  return (
    <form
      onSubmit={(e) => createContact(e, token).then(() => refreshSSProps())}
    >
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Create</button>
    </form>
  );
}
