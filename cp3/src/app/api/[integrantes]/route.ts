// app/api/[integrantes]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

// Rota GET
export async function GET(req: NextRequest, context: { params: { integrantes: string } }) {
  const { integrantes } = context.params;

  if (!integrantes) {
    return NextResponse.json(
      { error: 'Integrante não especificado.' },
      { status: 400 }
    );
  }

  const filePath = path.join(process.cwd(), `src/data/${integrantes}.json`);

  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);
    return NextResponse.json(evaluations);
  } catch (error) {
    return NextResponse.json(
      { error: `Falha ao obter dados para ${integrantes}: ${error}` },
      { status: 500 }
    );
  }
}

// Rota POST
export async function POST(req: NextRequest, context: { params: { integrantes: string } }) {
  const { integrantes } = context.params;
  const newEvaluation: Evaluation = await req.json();
  const filePath = path.join(process.cwd(), `src/data/${integrantes}.json`);

  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);
    evaluations.push(newEvaluation);
    await fs.writeFile(filePath, JSON.stringify(evaluations, null, 2));
    return NextResponse.json(newEvaluation);
  } catch (error) {
    return NextResponse.json(
      { error: `Falha ao adicionar dados para ${integrantes}: ${error}` },
      { status: 500 }
    );
  }
}

// Rota PUT
export async function PUT(req: NextRequest, context: { params: { integrantes: string } }) {
  const { integrantes } = context.params;
  const updatedEvaluation: Evaluation = await req.json();
  const filePath = path.join(process.cwd(), `src/data/${integrantes}.json`);

  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);
    const index = evaluations.findIndex(e => e.disciplina === updatedEvaluation.disciplina);

    if (index !== -1) {
      evaluations[index] = updatedEvaluation;
      await fs.writeFile(filePath, JSON.stringify(evaluations, null, 2));
      return NextResponse.json(updatedEvaluation);
    } else {
      return NextResponse.json(
        { error: `Disciplina não encontrada: ${updatedEvaluation.disciplina}` },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: `Falha ao atualizar dados para ${integrantes}: ${error}` },
      { status: 500 }
    );
  }
}

// Rota DELETE
export async function DELETE(req: NextRequest, context: { params: { integrantes: string } }) {
  const { integrantes } = context.params;
  const { disciplina } = await req.json();
  const filePath = path.join(process.cwd(), `src/data/${integrantes}.json`);

  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);
    const updatedEvaluations = evaluations.filter(e => e.disciplina !== disciplina);

    if (updatedEvaluations.length === evaluations.length) {
      return NextResponse.json(
        { error: `Disciplina não encontrada: ${disciplina}` },
        { status: 404 }
      );
    }

    await fs.writeFile(filePath, JSON.stringify(updatedEvaluations, null, 2));
    return NextResponse.json({ message: `Disciplina ${disciplina} removida com sucesso.` });
  } catch (error) {
    return NextResponse.json(
      { error: `Falha ao remover dados para ${integrantes}: ${error}` },
      { status: 500 }
    );
  }
}
