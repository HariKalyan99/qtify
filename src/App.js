// import './App.css';
import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { fetchAllSongs, fetchTopAlbums } from './api/api';
// import Card from './components/Card/Card';
import styles from './App.module.css'
import Section from './components/Section/Section';

function App() {
  const [getData, setData] = useState([]);
  const [getSongsData, setSongsData] = useState([]);
  const [filteredSongsDataVal, setFilteredSongsDataVal] = useState([]);
  const [val, setVal] = useState(0);



  const handleChange = (e, newVal) => {
    setVal(newVal);
  }

  const generateTopAlbums = async () => {
    try{
      const data = await fetchTopAlbums();
      setData(data);
    }catch(err){
      console.log("Error", err);
    }
  }

  const generateSongsData = (val) => {
    let key;
    if(val === 0){
      filteredSongsData(getSongsData);
      return;
    }else if(val === 1) {
      key = "rock";
    }else if(val === 2){
      key = "pop";
    }
    else if(val === 3){
      key = "blues";
    }
    else if(val === 4){
      key = "jazz";
    }
    const result = getSongsData.filter((ele) => ele.genre.key === key);
    filteredSongsData(result)

  }

  useEffect(() => {
    generateSongsData(val);
  }, [val])
  
  const filteredSongsData = (data) => {
    console.log(data);
    setFilteredSongsDataVal(data);
  }

  const generateAllSongsData = async () => {
    try{
      const response = await fetchAllSongs();
      setSongsData(response);
      setFilteredSongsDataVal(response);
    }catch(error) {
      console.log("Error", error.message);
    }
  }



  useEffect(() => {
    generateTopAlbums();
    generateAllSongsData();
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className={styles.container}> */}
      {/* {getData.map((topAlbum) => (
        <Card data={topAlbum} type={'album'} key={topAlbum.id}/>
      ))} */}
      {/* </div> */}
      <div className={styles.sectionContainer}>
      <Section data={getData} title={"Top albums"} type={"album"} filteredSongsDataVal={getData}/>
      <hr style={{border: "1px solid var(--color-primary)"}}/>
      <Section data={getData} title={"New albums"} type={"album"} filteredSongsDataVal={getData}/>
      <hr style={{border: "1px solid var(--color-primary)"}}/>
      <Section data={getSongsData} title={"Songs"} type={"song"} filteredSongsDataVal={filteredSongsDataVal} val={val}  handleChange={handleChange}/>
      <hr style={{border: "1px solid var(--color-primary)"}}/>
      </div>
    </div>
  );
}

export default App;
