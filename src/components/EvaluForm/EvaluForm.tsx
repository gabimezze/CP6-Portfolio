import { useState } from "react";
import { EvaluationCategory, Evaluation } from "../../utils/types";

interface EvaluationFormProps {
  onSubmit: (newEvaluation: Evaluation) => void;
}

const EvaluationForm: React.FC<EvaluationFormProps> = ({ onSubmit }) => {
  const [category, setCategory] = useState<EvaluationCategory>("CheckPoints");
  const [semester, setSemester] = useState<1 | 2>(1);
  const [scores, setScores] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ category, semester, scores });
    setScores([]); // Reset the scores
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value as EvaluationCategory)}>
        <option value="CheckPoints">CheckPoints</option>
        <option value="Challenge Sprint">Challenge Sprint</option>
        <option value="Global Solution">Global Solution</option>
      </select>

      <label>Semester</label>
      <select value={semester} onChange={(e) => setSemester(Number(e.target.value) as 1 | 2)}>
        <option value={1}>1st Semester</option>
        <option value={2}>2nd Semester</option>
      </select>

      <label>Scores</label>
      <input
        type="text"
        value={scores.join(",")}
        onChange={(e) => setScores(e.target.value.split(",").map(Number))}
        placeholder="Enter scores, e.g. 8,9,7"
      />

      <button type="submit">Add Evaluation</button>
    </form>
  );
};

export default EvaluationForm;
