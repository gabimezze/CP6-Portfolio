// integrantes/page.tsx
import Card from '../../components/Card/card';

const Integrantes = () => {
    const integrantesData = [
      { 
        name: 'Integrante 1', 
        email: 'integrante1@example.com', 
        imageUrl: 'https://via.placeholder.com/130', 
        socialLinks: [
          { url: 'https://facebook.com', iconUrl: 'https://via.placeholder.com/30?text=F' },
          { url: 'https://twitter.com', iconUrl: 'https://via.placeholder.com/30?text=T' },
        ]
      },
      { 
        name: 'Integrante 2', 
        email: 'integrante2@example.com', 
        imageUrl: 'https://via.placeholder.com/130', 
        socialLinks: [
          { url: 'https://facebook.com', iconUrl: 'https://via.placeholder.com/30?text=F' },
          { url: 'https://twitter.com', iconUrl: 'https://via.placeholder.com/30?text=T' },
        ]
      },
      { 
        name: 'Integrante 3', 
        email: 'integrante3@example.com', 
        imageUrl: 'https://via.placeholder.com/130', 
        socialLinks: [
          { url: 'https://facebook.com', iconUrl: 'https://via.placeholder.com/30?text=F' },
          { url: 'https://twitter.com', iconUrl: 'https://via.placeholder.com/30?text=T' },
        ]
      },
      { 
        name: 'Integrante 4', 
        email: 'integrante4@example.com', 
        imageUrl: 'https://via.placeholder.com/130', 
        socialLinks: [
          { url: 'https://facebook.com', iconUrl: 'https://via.placeholder.com/30?text=F' },
          { url: 'https://twitter.com', iconUrl: 'https://via.placeholder.com/30?text=T' },
        ]
      },
      { 
        name: 'Integrante 5', 
        email: 'integrante5@example.com', 
        imageUrl: 'https://via.placeholder.com/130', 
        socialLinks: [
          { url: 'https://facebook.com', iconUrl: 'https://via.placeholder.com/30?text=F' },
          { url: 'https://twitter.com', iconUrl: 'https://via.placeholder.com/30?text=T' },
        ]
      },
    ];
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-wrap justify-center">
          {integrantesData.map((integrante, index) => (
            <Card 
              key={index} 
              name={integrante.name} 
              email={integrante.email} 
              imageUrl={integrante.imageUrl} 
              socialLinks={integrante.socialLinks} 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Integrantes;