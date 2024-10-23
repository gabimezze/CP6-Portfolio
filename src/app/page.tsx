import { useState } from "react";
import EvaluationTable from "../components/EvaluTable/EvaluTable";
import EvaluationForm from "../components/EvaluForm/EvaluForm";
import { EvaluationData, Evaluation } from "../utils/types";

const initialData: EvaluationData = {
  CheckPoints: { 1: [8, 9, 7], 2: [7, 8, 8] },
  ChallengeSprint: { 1: [9, 8], 2: [8, 7] },
  GlobalSolution: { 1: [10], 2: [9] },
};

export default function Home() {
  const [evaluations, setEvaluations] = useState<EvaluationData>(initialData);

  const handleAddEvaluation = (newEvaluation: Evaluation) => {
    const { category, semester, scores } = newEvaluation;
    setEvaluations((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof EvaluationData],
        [semester]: scores,
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
