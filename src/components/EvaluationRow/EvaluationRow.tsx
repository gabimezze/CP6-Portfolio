interface EvaluationRowProps {
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
    };
    onEdit: (evaluation: unknown) => void;
    onDelete: (discipline: string) => void;
  }
  
  export default function EvaluationRow({ evaluation, onEdit, onDelete }: EvaluationRowProps) {
    return (
      <tr>
        <td className="border p-2">{evaluation.disciplina}</td>
        <td className="border p-2">{evaluation.cp1}</td>
        <td className="border p-2">{evaluation.cp2}</td>
        <td className="border p-2">{evaluation.cp3}</td>
        <td className="border p-2">{evaluation.cs1}</td>
        <td className="border p-2">{evaluation.cs2}</td>
        <td className="border p-2">{evaluation.cs3}</td>
        <td className="border p-2">{evaluation.cs4}</td>
        <td className="border p-2">{evaluation.gs}</td>
        <td className="border p-2">{evaluation.fa}</td>
        <td className="border p-2">{evaluation.md}</td>
        <td className="border p-2">
          <button onClick={() => onEdit(evaluation)} className="mr-2 text-pink-500">Editar</button>
          <button onClick={() => onDelete(evaluation.disciplina)} className="text-red-500">Excluir</button>
        </td>
      </tr>
    );
  }
  