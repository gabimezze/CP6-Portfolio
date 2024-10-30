"use client"
import { useState } from 'react';
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

const initialData: Evaluation[] = [
  { disciplina: "Artificial Intelligence & Chatbot", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5:0, cp6:0, cs1: 10, cs2: 10, cs3: 10,cs4: 8, gs: 0, fa: 4, md: 0 },
  { disciplina: "Building Relational Database", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5:0, cp6:0, cs1: 10, cs2: 10, cs3: 10,cs4: 8, gs: 0, fa: 4, md: 0},
  { disciplina: "Computational Thinking Using Python", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5:0, cp6:0, cs1: 10, cs2: 10, cs3: 10,cs4: 8, gs: 0, fa: 4, md: 0},
  { disciplina: "Domain Driven Design Using Java", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5:0, cp6:0, cs1: 10, cs2: 10, cs3: 10,cs4: 8, gs: 0, fa: 4, md: 0},
  { disciplina: "Front-end Design Engeneering", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5:0, cp6:0, cs1: 10, cs2: 10, cs3: 10,cs4: 8, gs: 0, fa: 4, md: 0},
  { disciplina: "Software Engeneering and Business Model", cp1: 82.5, cp2: 60, cp3: 69, cp4: 0, cp5:0, cp6:0, cs1: 10, cs2: 10, cs3: 10,cs4: 8, gs: 0, fa: 4, md: 0},

];

export default function Table() {
  const [evaluations, setEvaluations] = useState<Evaluation[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvaluation, setCurrentEvaluation] = useState<Evaluation | null>(null);
 

  const handleAdd = () => {
    setCurrentEvaluation(null); // Para adicionar uma nova avaliação
    setIsModalOpen(true);
  };

  const handleEdit = (evaluation: Evaluation) => {
    setCurrentEvaluation(evaluation); // Para editar uma avaliação existente
    setIsModalOpen(true);
  };

  const handleDelete = (discipline: string) => {
    setEvaluations(evaluations.filter(e => e.disciplina !== discipline));
  };

  const handleSubmit = (newEvaluation: Evaluation) => {
    if (currentEvaluation) {
      // Editar existente
      setEvaluations(evaluations.map(e => e.disciplina === currentEvaluation.disciplina ? newEvaluation : e));
    } else {
      // Adicionar nova
      setEvaluations([...evaluations, newEvaluation]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 ">
      <button onClick={handleAdd} className="mb-4 bg-pink-700 text-white p-2 rounded">
        Adicionar Avaliação
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
