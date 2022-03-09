import { Contact } from "../contact/contact";

export function ContactList({ data, token }) {
  {
    data &&
      data.records &&
      data.records.map((item) => (
        <Contact key={item.attributes.url} item={item} token={token} />
      ));
  }
}
