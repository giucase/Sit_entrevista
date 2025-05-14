import React from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactListProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEdit,
  onDelete,
  isLoading = false,
}) => {
  if (isLoading) {
    return <p className="text-center">Carregando contatos...</p>;
  }

  if (contacts.length === 0) {
    return <p className="text-center">Nenhum contato cadastrado.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-2 px-4 text-left">Nome</th>
            <th className="py-2 px-4 text-left">E-mail</th>
            <th className="py-2 px-4 text-left">Telefone</th>
            <th className="py-2 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{contact.name}</td>
              <td className="py-2 px-4">{contact.email}</td>
              <td className="py-2 px-4">{contact.phone}</td>
              <td className="py-2 px-4 flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(contact)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(contact.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
