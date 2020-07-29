import React from 'react';
import { categorias } from '../../data/dados_iniciais.json';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"Gonna Fly Now"}
      />

      {categorias.map(categoria => (
        <Carousel key={`${categoria.titulo}-${categoria.index}`} category={categoria} />
      ))}

      <Footer />

    </div>
  );
}

export default Home;
