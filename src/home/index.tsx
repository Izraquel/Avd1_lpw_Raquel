import React, { useState } from 'react';

interface Dados {
  nome: string;
  disciplina: string;
  hora: string;
  data: string;
}

const home : React.FC = () => {
  const [novoNome, setNovoNome] = useState('');
  const [novaDisciplina, setNovaDisciplina] = useState('');
  const [novaHora, setNovoHora] = useState('');
  const [novaData, setNovoData] = useState('');

  function Formulario() {
    return 0;
  }
  return (

      <form onSubmit={}>
        <div className="formulario">
          <strong>Disciplina</strong>
          <input
            placeholder="Digite o Nome da disciplina"
            value={novoNome}
            onChange={(e: any) => {
              setNovoNome(e.target.value);
            }}
          />
        </div>

        <div className="formulario">
          <strong>Dia da Semana</strong>
          <input
            placeholder="Digite os dia da semana"
            value={novoNome}
            onChange={(e: any) => {
              setNovoNome(e.target.value);
            }}
          />
        </div>

        <div className="formulario">
          <strong>Professor</strong>
          <input
            placeholder="Digite o nome do professor"
            value={novoNome}
            onChange={(e: any) => {
              setNovoNome(e.target.value);
            }}
          />
        </div>

        <div className="formulario">
          <strong>Hora</strong>
          <input
            placeholder="Digite o nome do professor"
            value={novoNome}
            onChange={(e: any) => {
              setNovoNome(e.target.value);
            }}
          />
        </div>


        <button type="submit">Enviar</button>

    </form>

};

export default home;
