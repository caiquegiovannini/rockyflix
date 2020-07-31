import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriesTitles = categorias.map((categoria) => categoria.titulo);
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServidor) => {
        setCategorias(categoriasDoServidor);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => (
          categoria.titulo === valores.categoria
        ));

        if (categoriaEscolhida === undefined) {
          // eslint-disable-next-line no-alert
          alert('Essa categoria não existe!'); // sorry, logo mais eu arrumo

          return;
        }

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoriesTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {/* Cadastro de categoria somente para pessoal autorizado
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link> */}
    </PageDefault>
  );
}

export default CadastroVideo;
