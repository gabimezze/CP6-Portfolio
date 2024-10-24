import { EvaluationData } from "../../utils/types";

interface EvaluationTableProps {
  evaluations: EvaluationData;
}

const EvaluationTable: React.FC<EvaluationTableProps> = ({ evaluations }) => {
  return (
    <div>
      <h2>Evaluation Data</h2>
      {Object.keys(evaluations).map((subject) => (
        <div key={subject}>
          <h3>{subject}</h3>
          <table>
            <thead>
              <tr>
                <th>Matérias</th>
                <th>Semester 1</th>
                <th>Semester 2</th>
              </tr>
              <tr>
                <th></th>
                <th>CP GS Challenge</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(evaluations[subject]).map((category) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td>{evaluations[subject][category as keyof EvaluationData["Matemática"]][1].join(", ")}</td>
                  <td>{evaluations[subject][category as keyof EvaluationData["Matemática"]][2].join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default EvaluationTable;

