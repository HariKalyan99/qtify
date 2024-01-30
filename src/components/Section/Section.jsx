import React, { useState } from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({ data, title, type, filteredSongsDataVal, val, handleChange}) => {
  // console.log(data);
  const [carouselToggle, setCarouselToggle] = useState(false);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Show all" : "Collapse All"}
        </h4>
      </div>
      {type === "song" ? <BasicTabs value={val} handleChange={handleChange} /> : null}
      {data.length === 0 ? (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <CircularProgress sx={{color: "var(--color-primary)"}}/>
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredSongsDataVal.map((ele) => {
                return <Card data={ele} type={type} key={ele.id} />;
              })}
            </div>
          ) : (
            <Carousel data={filteredSongsDataVal} renderComponent={(singleCard) => <Card data={singleCard} type={type}/>}/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;

