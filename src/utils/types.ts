export type EvaluationCategory = 'CheckPoints' | 'Challenge Sprint' | 'Global Solution';

export interface Evaluation {
  category: EvaluationCategory;
  semester: 1 | 2;
  scores: number[];
}

export interface EvaluationData {
  CheckPoints: { 1: number[], 2: number[] };
  ChallengeSprint: { 1: number[], 2: number[] };
  GlobalSolution: { 1: number[], 2: number[] };
}