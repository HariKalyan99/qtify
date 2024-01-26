// import './App.css';
import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums } from './api/api';
import Card from './components/Card/Card';
import styles from './App.module.css'

function App() {
  const [getData, setData] = useState([]);

  const generateTopAlbums = async () => {
    try{
      const data = await fetchTopAlbums();
      setData(data);
    }catch(err){
      console.log("Error", err);
    }
  }

  useEffect(() => {
    generateTopAlbums();
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className={styles.container}> */}
      {getData.map((topAlbum) => (
        <Card data={topAlbum} type={'album'} key={topAlbum.id}/>
      ))}
      {/* </div> */}
    </div>
  );
}

export default App;
