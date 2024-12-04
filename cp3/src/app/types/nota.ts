
// types/Nota.ts
export interface Nota {
  id: number;
  tipo: 'CP' | 'CS' | 'GS'; // CP = Checkpoint, CS = Challenge Sprint, GS = Global Solution
  semestre: 1 | 2;
  valor: number;
};

export interface Boletim {
  cp: Nota[];
  cs: Nota[];
  gs: Nota[];
};
