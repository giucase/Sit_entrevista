import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface EditContactProps {
  onSave: (contact: Contact) => void;
  onCancel: () => void;
}

const EditContact: React.FC<EditContactProps> = ({ onSave, onCancel }) => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    // Simulando busca de dados (você pode integrar com seu backend depois)
    const fetchedContact: Contact = {
      id: Number(id),
      name: "João Silva",
      email: "joao@email.com",
      phone: "11999999999",
    };
    setContact(fetchedContact);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (contact) {
      setContact({
        ...contact,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      onSave(contact);
    }
  };

  if (!contact) return <p>Carregando contato...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Contato</h2>

      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default EditContact;
