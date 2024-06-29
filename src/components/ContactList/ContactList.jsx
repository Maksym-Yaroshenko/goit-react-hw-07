import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  collbackContactsSlice,
  collbackFiltersSlice,
} from "../../redux/collbackFunctions";

export default function ContactList() {
  const selectContacts = useSelector(collbackContactsSlice);
  const selectNameFilter = useSelector(collbackFiltersSlice);

  return (
    <>
      <ul>
        {selectContacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(selectNameFilter)
          )
          .map((selectContact) => (
            <Contact key={selectContact.id} oneUser={selectContact} />
          ))}
      </ul>
    </>
  );
}
