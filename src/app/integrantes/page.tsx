// integrantes/page.tsx
import Card from '../../components/Card/Card';

const Integrantes = () => {
  const integrantesData = [
    { 
      name: 'Ana Carolina de Castro Gonçalves', 
      rm:'rm: 554669', 
      imageUrl: 'https://via.placeholder.com/130', 
    },
    { 
      name:'Gabriela Gomes Cezar', 
      rm:'rm: 556941', 
      imageUrl: 'https://via.placeholder.com/130', 
    },
    { 
      name: 'Luisa Danielle', 
      rm: 'rm: 555292', 
      imageUrl: 'https://via.placeholder.com/130', 
    },
    { 
      name:'Mateus de Castro Nappe', 
      rm:'rm: 556474', 
      imageUrl: 'https://via.placeholder.com/130', 
    },
    { 
      name:'Michelle Potenza', 
      rm:'rm: 557702', 
      imageUrl: 'https://via.placeholder.com/130', 
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-#E30557FF">
      <div className="flex flex-wrap justify-center">
        {integrantesData.map((integrante, index) => (
          <Card 
            key={index} 
            name={integrante.name} 
            rm={integrante.rm} 
            imageUrl={integrante.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default Integrantes;