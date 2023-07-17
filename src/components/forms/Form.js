import { useContext } from "react";
import styles from "./Form.module.css";
import DataProvider from "../../context/DataProvider";
import { useForm } from "react-hook-form";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const { setKcal, scrollDown } = useContext(DataProvider);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCalculation = (data) => {
    setKcal(
      66 + 13.7 * data.peso + 5.0 * (data.altura * 100) - 6.8 * data.idade
    );
    scrollDown();
  };

  return (
    <form
      className={`${styles.form} ${errors ? styles.invalid : ""}`}
      onSubmit={handleSubmit(handleCalculation)}
    >
      <h1>Descrubra suas calorias.</h1>
      <input
        type="number"
        id="peso"
        step="any"
        placeholder="Digite o seu peso"
        {...register("peso")}
      />
      {errors.peso && <p>Digite um peso.</p>}
      <input
        type="number"
        id="altura"
        step="any"
        placeholder="Digite a sua altura"
        {...register("altura")}
      />
      {errors.altura && <p>Digite uma altura.</p>}
      <input
        type="number"
        id="idade"
        placeholder="Digite a sua idade"
        {...register("idade")}
      />
      {errors.idade && <p>Digite uma indade.</p>}

      <button type="submit">Descobrir</button>
    </form>
  );
};

export default Form;

// 66 + (13,7 x kg) + (5,0 x cm) - (6,8 x idade)

// 66 + (13,7 x 80) + (5,0 x 180) - (6,8 x 25)

// 66 + 1096 + 900 +170 + 500
