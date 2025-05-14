import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (data: Omit<Contact, "id">) => {
    try {
      await axios.post("http://localhost:3000/contacts", data);
      fetchContacts();
    } catch (error) {
      console.error("Erro ao criar contato:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
    }
  };

  const handleEdit = (contact: Contact) => {
    navigate(`/edit/${contact.id}`, { state: contact });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciador de Contatos</h1>
      <ContactForm onSubmit={handleCreate} />
      <hr className="my-6" />
      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  );
};

export default Home;
