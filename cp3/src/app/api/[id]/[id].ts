

const saveEvaluation = async (evaluation: Evaluation) => {
  try {
    const response = await fetch('https://suaapi.com/avaliacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(evaluation),
    });
    if (!response.ok) {
      throw new Error('Erro ao salvar a avaliação');
    }
    console.log('Avaliação salva com sucesso');
  } catch (error) {
    console.error('Erro:', error);
  }
};

