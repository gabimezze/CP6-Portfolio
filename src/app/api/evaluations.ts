// /pages/api/evaluations.ts

import { NextApiRequest, NextApiResponse } from 'next';

const evaluations = {
  CheckPoints: { 1: [8, 9, 7], 2: [7, 8, 8] },
  ChallengeSprint: { 1: [9, 8], 2: [8, 7] },
  GlobalSolution: { 1: [10], 2: [9] },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(evaluations);
  } else if (req.method === 'POST') {
    const { category, semester, scores } = req.body;
    evaluations[category][semester] = scores;
    res.status(200).json({ message: "Avaliação adicionada com sucesso!" });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
