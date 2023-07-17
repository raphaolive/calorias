import styles from "./Sections.module.css";
import DataProvider from "../../context/DataProvider";
import React, { useContext } from "react";

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
      <h1>{content.h1}</h1>
      <p>{content.p}</p>
    </div>
  );
};

export default SectionTwo;
