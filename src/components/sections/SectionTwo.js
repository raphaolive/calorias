import styles from "./Sections.module.css";
import DataProvider from "../../context/DataProvider";
import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Description";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const SectionTwo = () => {
  const { kcal } = useContext(DataProvider);

  const content =
    kcal === 0
      ? {
          h1: "Preencha o formulário acima.",
          p: "Para descobrir a quantidade de calorias que você gasta por dia, preencha o formulário acima.",
        }
      : {
          h1: `Você consome ${Math.round(kcal)} kcal / dia.`,
          p: "Se seu objetivo é ganho de peso, tente consumir 500kcal a mais por dia, se for perda de peso, tente consumir menos 500kcal",
        };

  return (
    <div className={styles["section-two"]}>
      {kcal === 0}
      <Typography variant="h3" style={{ color: "rgb(178, 178, 178)" }}>
        {content.h1}
      </Typography>
      <Typography variant="p" style={{ color: "rgb(178, 178, 178)" }}>
        {content.p}
      </Typography>
      <div>
        <Button
          // disabled={kcal === 0}
          variant="contained"
          size="large"
          style={{
            margin: "30px 10px",
          }}
          endIcon={<RestaurantIcon />}
        >
          Baixar Dieta
        </Button>
        <Button
          // disabled={kcal === 0}
          variant="contained"
          size="large"
          color="success"
          style={{
            margin: "30px 10px",
            // backgroundColor: "#478C5C",
          }}
          endIcon={<FitnessCenterIcon />}
        >
          Baixar Treino
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default SectionTwo;
