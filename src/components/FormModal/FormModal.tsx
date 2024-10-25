import { useState } from 'react';

interface FormModalProps {
  evaluation: {
    disciplina: string;
    cp1: number;
    cp2: number;
    cp3: number;
    cs1: number;
    cs2: number;
    cs3: number;
    cs4: number;
    gs: number;
    fa: number;
    md: number;
  } | null;
  onClose: () => void;
  onSubmit: (evaluation: unknown) => void;
}

export default function FormModal({ evaluation, onClose, onSubmit }: FormModalProps) {
  const [formData, setFormData] = useState(evaluation || {
    disciplina: '',
    cp1: 0,
    cp2: 0,
    cp3: 0,
    cs1: 0,
    cs2: 0,
    cs3: 0,
    cs4: 0,
    gs: 0,
    fa: 0,
    md: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">{evaluation ? 'Editar Avaliação' : 'Adicionar Avaliação'}</h2>
        <div className="mb-4">
          <label>Disciplina</label>
          <input
            type="text"
            name="disciplina"
            value={formData.disciplina}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        {['cp1', 'cp2', 'cp3','cs1','cs2','cs3','cs4', 'gs', 'fa', 'md'].map(field => (
          <div key={field} className="mb-4">
            <label>{field.toUpperCase()}</label>
            <input
              type="number"
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="border p-2 w-72 h-8"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 p-2 bg-pink-800 text-white rounded">Cancelar</button>
          <button onClick={handleSubmit} className="p-2 bg-pink-500 text-white rounded">Salvar</button>
        </div>
      </div>
    </div>
  );
}
