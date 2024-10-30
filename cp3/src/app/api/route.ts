import { NextResponse } from "next/server";
import { promises as fs } from "fs";

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

const filePath = process.cwd() + '/src/data/banco.json'; 

export async function GET() {
  try {
    // Lê o arquivo JSON
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);
    return NextResponse.json(evaluations);
  } catch (error) {
    return NextResponse.json({ error: "Falha na obtenção da lista de avaliações: " + error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Lê o arquivo JSON
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);

    // Recebe os dados da nova avaliação
    const newEvaluation: Evaluation = await request.json();

    // Adiciona a nova avaliação à lista
    evaluations.push(newEvaluation);

    // Converte a lista de volta para JSON
    const updatedListJson = JSON.stringify(evaluations, null, 2);

    // Escreve a lista atualizada de volta no arquivo
    await fs.writeFile(filePath, updatedListJson);

    return NextResponse.json(newEvaluation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Falha na inserção da avaliação: " + error }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    // Lê o arquivo JSON
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);

    // Recebe os dados da avaliação a ser atualizada
    const updatedEvaluation: Evaluation = await request.json();

    // Atualiza a avaliação correspondente
    const index = evaluations.findIndex(e => e.disciplina === updatedEvaluation.disciplina);
    if (index !== -1) {
      evaluations[index] = updatedEvaluation;
    }

    // Converte a lista de volta para JSON
    const updatedListJson = JSON.stringify(evaluations, null, 2);

    // Escreve a lista atualizada de volta no arquivo
    await fs.writeFile(filePath, updatedListJson);

    return NextResponse.json(updatedEvaluation);
  } catch (error) {
    return NextResponse.json({ error: "Falha na atualização da avaliação: " + error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    // Lê o arquivo JSON
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);

    // Recebe os dados da avaliação a ser deletada
    const { disciplina } = await request.json();

    // Filtra a avaliação a ser deletada
    const updatedEvaluations = evaluations.filter(e => e.disciplina !== disciplina);

    // Converte a lista de volta para JSON
    const updatedListJson = JSON.stringify(updatedEvaluations, null, 2);

    // Escreve a lista atualizada de volta no arquivo
    await fs.writeFile(filePath, updatedListJson);

    return NextResponse.json({ message: "Avaliação deletada com sucesso!" });
  } catch (error) {
    return NextResponse.json({ error: "Falha na deleção da avaliação: " + error }, { status: 500 });
  }
}