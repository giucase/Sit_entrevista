import React, { useState, useEffect } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface EditContactProps {
  contactId: number; // ID do contato a ser editado
  onSave: (contact: Contact) => void; // Função para salvar as alterações
  onCancel: () => void; // Função para cancelar a edição
}

const EditContact: React.FC<EditContactProps> = ({
  contactId,
  onSave,
  onCancel,
}) => {
  const [contact, setContact] = useState<Contact | null>(null);

  // Simulando o carregamento do contato. Substitua por uma chamada de API real.
  useEffect(() => {
    // Aqui você pode fazer uma chamada à API para buscar o contato
    // Estou usando um exemplo estático de dados
    const fetchedContact = {
      id: contactId,
      name: "João Silva",
      email: "joao.silva@email.com",
      phone: "123-456-7890",
    };
    setContact(fetchedContact);
  }, [contactId]);

  // Função para atualizar o estado do contato
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (contact) {
      setContact({
        ...contact,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      onSave(contact);
    }
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
