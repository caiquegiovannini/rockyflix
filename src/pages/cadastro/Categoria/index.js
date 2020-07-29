import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [valores, setValores] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;

    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([
      ...categorias,
      valores,
    ]);

    setValores(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição da Categoria:
            <textarea
              value={valores.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor da Categoria"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.nome}-${index}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;