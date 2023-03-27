import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [exibirMensagem, setExibirMensagem] = useState('');

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen)
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
        setExibirMensagem('Cor alterada')
      } else {
        setBlackHeader(false);
        setExibirMensagem('Cor default')
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className='page'>

      <Header mensagem={exibirMensagem} black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com React <span><img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' /></span>
        Por Luan Tavares<br />
        Direitos de imagem para a Netflix <br />
        Dados pegos no site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://i.gifer.com/8Etj.gif' />
        </div>
      }
    </div >
  );
}