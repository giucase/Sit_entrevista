import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const EditContact: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contact = location.state as Contact;

  const handleUpdate = async (data: Omit<Contact, "id">) => {
    try {
      await axios.put(`http://localhost:3000/contacts/${contact.id}`, data);
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
    }
  };

  if (!contact) return <p>Contato não encontrado.</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Contato</h1>
      <ContactForm onSubmit={handleUpdate} initialData={contact} />
    </div>
  );
};

export default EditContact;
