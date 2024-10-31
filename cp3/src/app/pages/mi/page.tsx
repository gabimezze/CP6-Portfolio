import Table from '../../../components/Table/Table';

export default function Boletim() {
  const integrante = "Michelle"; 

  return (
    <div>
      <h1 className="text-3xl mt-16 font-medium text-center mb-6">Boletim Acadêmico de {integrante}</h1>
      <Table integrante={integrante}/> 
    </div>
  );
}
