import React from 'react';
import './App.css';
import requests from './requests';
import './App.css'
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner></Banner>

      <Row
        title="NETFLIX ORİJİNAL İÇERİKLERİ"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trend" fetchUrl={requests.fetchTrending} />
      <Row title="En Çok Beğenilen" fetchUrl={requests.fetchTopRated} />
      <Row title="Aksiyon Filmleri" fetchUrl={requests.fetchActionMovies} />
      <Row title="Komedi Filmleri" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Korku Filmleri" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantik Filmleri" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Belgeseller" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
