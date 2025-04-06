import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "../ContactList/ContactList.module.css"

const getVisibleContacts = (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
    );
};



export default function ContactList() {

    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.status);
    const visibleContacts = getVisibleContacts(contacts, filter)

    return (
        <div  >
            <ul className={styles.container}>
                {
                    visibleContacts.map(contact => (
                        <li key={contact.id}>
                            <Contact data={contact} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}