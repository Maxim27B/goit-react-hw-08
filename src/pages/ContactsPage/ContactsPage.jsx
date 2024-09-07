import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.pageContainer}>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
