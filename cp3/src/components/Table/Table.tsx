"use client";
import { useState, useEffect } from 'react';
import EvaluationRow from '../EvaluationRow/EvaluationRow';
import FormModal from '../FormModal/FormModal';

interface Evaluation {
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

interface TableProps {
  integrante: string;
}

 const initialData: Evaluation[] = [
   { disciplina: "Artificial Intelligence & Chatbot", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5: 0, cp6: 0, cs1: 10, cs2: 10, cs3: 10, cs4: 8, gs: 0, fa: 4, md: 0 },
   { disciplina: "Building Relational Database", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5: 0, cp6: 0, cs1: 10, cs2: 10, cs3: 10, cs4: 8, gs: 0, fa: 4, md: 0 },
   { disciplina: "Computational Thinking Using Python", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5: 0, cp6: 0, cs1: 10, cs2: 10, cs3: 10, cs4: 8, gs: 0, fa: 4, md: 0 },
   { disciplina: "Domain Driven Design Using Java", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5: 0, cp6: 0, cs1: 10, cs2: 10, cs3: 10, cs4: 8, gs: 0, fa: 4, md: 0 },
   { disciplina: "Front-end Design Engineering", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5: 0, cp6: 0, cs1: 10, cs2: 10, cs3: 10, cs4: 8, gs: 0, fa: 4, md: 0 },
   { disciplina: "Software Engineering and Business Model", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5: 0, cp6: 0, cs1: 10, cs2: 10, cs3: 10, cs4: 8, gs: 0, fa: 4, md: 0 },
 ];

export default function Table({ integrante }: TableProps) {
  const [evaluations, setEvaluations] = useState<Evaluation[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvaluation, setCurrentEvaluation] = useState<Evaluation | null>(null);

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const response = await fetch(`/api/${integrante}`);
        if (response.ok) {
          const data = await response.json();
          setEvaluations(data);
        } else {
          console.error(`Erro ao buscar dados: Status ${response.status}`);
          setEvaluations([]); 
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Erro na requisição: ${error.message}`);
        } else {
          console.error('Erro inesperado na requisição.');
        }
        setEvaluations([]);
      }
    };
  
    fetchEvaluations();
  }, [integrante]);

  const handleAdd = () => {
    setCurrentEvaluation(null);
    setIsModalOpen(true);
  };

  const handleEdit = (evaluation: Evaluation) => {
    setCurrentEvaluation(evaluation);
    setIsModalOpen(true);
  };

  const handleDelete = async (discipline: string) => {
    const updatedEvaluations = evaluations.filter(e => e.disciplina !== discipline);
    setEvaluations(updatedEvaluations);

    await fetch(`/api/${integrante}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ disciplina: discipline }),
    });
  };

  const handleSubmit = async (newEvaluation: Evaluation) => {
    if (currentEvaluation) {
      const updatedEvaluations = evaluations.map(e =>
        e.disciplina === currentEvaluation.disciplina ? newEvaluation : e
      );
      setEvaluations(updatedEvaluations);

      await fetch(`/api/${integrante}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvaluation),
      });
    } else {
      const updatedEvaluations = [...evaluations, newEvaluation];
      setEvaluations(updatedEvaluations);

      await fetch(`/api/${integrante}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvaluation),
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 ">
      <button onClick={handleAdd} className="mb-4 bg-pink-700 text-white p-2 rounded">
        Adicionar Disciplina
      </button>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Disciplina</th>
            <th className="border p-2">CP1</th>
            <th className="border p-2">CP2</th>
            <th className="border p-2">CP3</th>
            <th className="border p-2">CP4</th>
            <th className="border p-2">CP5</th>
            <th className="border p-2">CP6</th>
            <th className="border p-2">CS1</th>
            <th className="border p-2">CS2</th>
            <th className="border p-2">CS3</th>
            <th className="border p-2">CS4</th>
            <th className="border p-2">GS</th>
            <th className="border p-2">FA</th>
            <th className="border p-2">MD</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {evaluations.map((evaluation) => (
            <EvaluationRow
              key={evaluation.disciplina}
              evaluation={evaluation}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <FormModal
          evaluation={currentEvaluation}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}