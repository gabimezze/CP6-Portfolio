import { useState } from 'react';

interface Evaluation {
  id?: number;  // Adiciona um identificador único para cada avaliação
  disciplina: string;
  cp1: number;
  cp2: number;
  cp3: number;
  cp4: number;
  cp5: number;
  cp6: number;
  cs1: number;
  cs2: number;
  cs3: number;
  cs4: number;
  gs: number;
  fa: number;
  md: number;
}

interface FormModalProps {
  evaluation: Evaluation | null;
  onClose: () => void;
  onSubmit: (evaluation: Evaluation) => void;
}

export default function FormModal({ evaluation, onClose, onSubmit }: FormModalProps) {
  const [formData, setFormData] = useState<Evaluation>(
    evaluation || {
      disciplina: '',
      cp1: 0,
      cp2: 0,
      cp3: 0,
      cp4: 0,
      cp5: 0,
      cp6: 0,
      cs1: 0,
      cs2: 0,
      cs3: 0,
      cs4: 0,
      gs: 0,
      fa: 0,
      md: 0,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'disciplina' ? value : parseFloat(value) || 0,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">{evaluation ? 'Editar Avaliação' : 'Adicionar Avaliação'}</h2>
        <form onSubmit={handleSubmit}>
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
          {['cp1', 'cp2', 'cp3', 'cp4', 'cp5', 'cp6', 'cs1', 'cs2', 'cs3', 'cs4', 'gs', 'fa', 'md'].map((field) => (
            <div key={field} className="mb-4">
              <label>{field.toUpperCase()}</label>
              <input
                type="number"
                name={field}
                value={formData[field as keyof Evaluation]}
                onChange={handleChange}
                className="border p-2 w-72 h-8"
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 p-2 bg-pink-800 text-white rounded">Cancelar</button>
            <button type="submit" className="p-2 bg-pink-500 text-white rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
