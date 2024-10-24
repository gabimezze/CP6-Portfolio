"use client";
import { useState } from "react";
import EvaluationTable from "../../components/EvaluTable/EvaluTable";
import EvaluationForm from "../../components/EvaluForm/EvaluForm";
import { EvaluationData, Evaluation } from "../../utils/types";

const initialData: EvaluationData = {
  Matemática: {
    CheckPoints: { 1: [8, 9, 7], 2: [7, 8, 8] },
    ChallengeSprint: { 1: [9, 8], 2: [8, 7] },
    GlobalSolution: { 1: [10], 2: [9] },
  },
  Programação: {
    CheckPoints: { 1: [7, 6, 8], 2: [9, 9, 8] },
    ChallengeSprint: { 1: [8, 7], 2: [9, 8] },
    GlobalSolution: { 1: [8], 2: [7] },
  },
  "Engenharia de Software": {
    CheckPoints: { 1: [8, 9, 9], 2: [7, 8, 9] },
    ChallengeSprint: { 1: [9, 7], 2: [8, 9] },
    GlobalSolution: { 1: [10], 2: [9] },
  },
  "Banco de Dados": {
    CheckPoints: { 1: [7, 8, 8], 2: [8, 9, 9] },
    ChallengeSprint: { 1: [8, 9], 2: [7, 8] },
    GlobalSolution: { 1: [9], 2: [8] },
  },
  "Redes de Computadores": {
    CheckPoints: { 1: [8, 9, 7], 2: [9, 8, 8] },
    ChallengeSprint: { 1: [9, 8], 2: [8, 9] },
    GlobalSolution: { 1: [8], 2: [7] },
  },
  "Sistemas Operacionais": {
    CheckPoints: { 1: [9, 8, 9], 2: [8, 7, 8] },
    ChallengeSprint: { 1: [9, 8], 2: [7, 8] },
    GlobalSolution: { 1: [9], 2: [8] },
  },
};

export default function Home() {
  const [evaluations, setEvaluations] = useState<EvaluationData>(initialData);

  const handleAddEvaluation = (newEvaluation: Evaluation) => {
    const { subject, category, semester, scores } = newEvaluation;
    setEvaluations((prev) => ({
      ...prev,
      [subject]: {
        ...prev[subject],
        [category]: {
          ...prev[subject][category],
          [semester]: scores,
        },
      },
    }));
  };

  return (
    <div>
      <h1>Academic Evaluations</h1>
      <EvaluationTable evaluations={evaluations} />
      <h2>Add New Evaluation</h2>
      <EvaluationForm onSubmit={handleAddEvaluation} />
    </div>
  );
}
