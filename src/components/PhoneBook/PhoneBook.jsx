import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, Title, ContactTitle } from './PhoneBook.styled';

export class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (
      !this.state.contacts.find(
        ({ name }) => name.toLocaleLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm handleSubmit={this.addContact}></ContactForm>

        <ContactTitle>Contacts</ContactTitle>
        {this.state.contacts.length !== 0 && (
          <Filter value={this.state.filter} onChange={this.findContact} />
        )}

        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
