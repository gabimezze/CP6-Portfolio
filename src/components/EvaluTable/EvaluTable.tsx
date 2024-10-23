import { EvaluationData } from "../../utils/types";

interface EvaluationTableProps {
  evaluations: EvaluationData;
}

const EvaluationTable: React.FC<EvaluationTableProps> = ({ evaluations }) => {
  return (
    <div>
      <h2>Evaluation Data</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Semester 1</th>
            <th>Semester 2</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(evaluations).map((category) => (
            <tr key={category}>
              <td>{category}</td>
              <td>{evaluations[category as keyof EvaluationData][1].join(", ")}</td>
              <td>{evaluations[category as keyof EvaluationData][2].join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationTable;
