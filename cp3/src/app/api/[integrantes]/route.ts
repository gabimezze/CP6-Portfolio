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

export async function GET(req: NextRequest, { params }: { params: { integrantes: string } }) {
  const { integrantes } = params; 
  
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

export async function POST(request: Request, { params }: { params: { integrantes: string } }) {
  const { integrantes } = params;
  const newEvaluation: Evaluation = await request.json();
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

export async function PUT(request: Request, { params }: { params: { integrantes: string } }) {
  const { integrantes } = params;
  const updatedEvaluation: Evaluation = await request.json();
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

export async function DELETE(request: Request, { params }: { params: { integrantes: string } }) {
  const { integrantes } = params;
  const { disciplina } = await request.json();
  const filePath = path.join(process.cwd(), `src/data/${integrantes}.json`);

  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const evaluations: Evaluation[] = JSON.parse(file);
    const updatedEvaluations = evaluations.filter(e => e.disciplina !== disciplina);
    await fs.writeFile(filePath, JSON .stringify(updatedEvaluations, null, 2));
    return NextResponse.json({ message: `Disciplina ${disciplina} removida com sucesso.` });
  } catch (error) {
    return NextResponse.json(
      { error: `Falha ao remover dados para ${integrantes}: ${error}` },
      { status: 500 }
    );
  }
}