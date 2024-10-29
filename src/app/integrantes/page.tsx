import Card from '../../components/Card/Card';
import intAna from '@/img/integrante-ana.png';
import intGabi from '@/img/integrante-gabriela.png';
import intLu from '@/img/integrante-luisa.png';
import intMat from '@/img/integrante-mateus.png';
import intMi from '@/img/integrante-michelle.png';

const Integrantes = () => {
  const integrantesData = [
    { 
      name: 'Ana Carolina de Castro Gonçalves', 
      rm: 'RM: 554669', 
      imageUrl: intAna, 
      link: '/pages/ana' 
    },
    { 
      name: 'Gabriela Gomes Cezar', 
      rm: 'RM: 556941', 
      imageUrl: intGabi, 
      link: '/pages/gabi' 
    },
    { 
      name: 'Luisa Danielle', 
      rm: 'RM: 555292', 
      imageUrl: intLu, 
      link: '/pages/lu' 
    },
    { 
      name: 'Mateus de Castro Nappe', 
      rm: 'RM: 556474', 
      imageUrl: intMat, 
      link: '/pages/mat'
    },
    { 
      name: 'Michelle Potenza', 
      rm: 'RM: 557702', 
      imageUrl: intMi, 
      link: '/pages/mi'
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
            link={integrante.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Integrantes;