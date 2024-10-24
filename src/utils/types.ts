export type EvaluationCategory = 'CheckPoints' | 'Challenge Sprint' | 'Global Solution';

export type Subject = 
  | 'Matemática'
  | 'Programação'
  | 'Engenharia de Software'
  | 'Banco de Dados'
  | 'Redes de Computadores'
  | 'Sistemas Operacionais';

export interface Evaluation {
  subject: Subject;
  category: EvaluationCategory;
  semester: 1 | 2;
  scores: number[];
}

export interface EvaluationData {
  [subject: string]: {
    CheckPoints: { 1: number[], 2: number[] };
    ChallengeSprint: { 1: number[], 2: number[] };
    GlobalSolution: { 1: number[], 2: number[] };
  };
}