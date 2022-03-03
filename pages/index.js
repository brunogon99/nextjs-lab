import { useState } from 'react/cjs/react.production.min';
import Pessoa from '../components/Pessoa';
import comAutorizacao from '../hoc/comAutorizacao';

function Home() {
  const [idadeBruno, setIdadeBruno] = useState();
  const pessoas = [
    {
      nomePessoa: 'Cleiton',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Glau',
      idadePessoa: 25
    },
    {
      nomePessoa: 'Paulo',
      idadePessoa: 30
    }
  ]

  const incrementaIdadeBruno = () =>{
    setIdadeBruno(idadeBruno++);
    //console.log(idadeBruno++);
  }

  return (
    <>
    <h1>Olá Mundo {process.env.NEXT_PUBLIC_TESTE}</h1>
    <Pessoa nome='Bruno' idade={idadeBruno}/>
    <Pessoa nome='Jéssica' idade ={25}/>
    {pessoas.map(({ nomePessoa, idadePessoa }, index) => {
      return <Pessoa 
      nome={nomePessoa}
      idade={idadePessoa}
      key={index}
      />
    })}
    <button onClick={incrementaIdadeBruno}>Incrementa idade Bruno</button>
    </>
  )
}

export default comAutorizacao(Home);