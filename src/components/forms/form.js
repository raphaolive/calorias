import { useContext, useState } from "react";
import DataProvider from "../../context/DataProvider";
import { useForm } from "react-hook-form";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MeasureForm = () => {
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

  const [page, setpage] = useState(1);
  const [gender, setGender] = useState();
  const [activity, setActivity] = useState();

  return (
    <form
      style={{
        background: "rgb(235 239 241)",
        padding: "40px",
        borderRadius: "15px",
        width: "70%",
      }}
      onSubmit={handleSubmit(handleCalculation)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Descrubra suas calorias.</Typography>
        </Grid>

        {page === 1 && (
          <Grid item xs={12}>
            <Typography variant="p">Selecione o seu gênero:</Typography>
            <FormGroup>
              <RadioGroup
                arial-labbel="gender"
                name="gender"
                value={gender}
                onChange={setGender}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Homem"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Mulher"
                />
              </RadioGroup>
            </FormGroup>
          </Grid>
        )}

        {page === 2 && (
          <Grid item xs={12}>
            <Typography variant="p">Fator de atividade</Typography>
            <FormGroup>
              <RadioGroup
                arial-labbel="activity"
                name="activity"
                value={activity}
                onChange={setActivity}
              >
                <FormControlLabel
                  value="sedentario"
                  control={<Radio color="primary" />}
                  label="Sedentário"
                />
                <FormControlLabel
                  value="pouco"
                  control={<Radio color="primary" />}
                  label="Pouco ativo"
                />
                <FormControlLabel
                  value="moderado"
                  control={<Radio color="primary" />}
                  label="Moderadamente ativo"
                />
                <FormControlLabel
                  value="ativo"
                  control={<Radio color="primary" />}
                  label="Ativo"
                />
                 <FormControlLabel
                  value="intenso"
                  control={<Radio color="primary" />}
                  label="Muito ativo"
                />
              </RadioGroup>
            </FormGroup>
          </Grid>
        )}

        {page === 3 && (
          <Grid item xs={12}>
            <TextField
              helperText={errors.peso && "Por favor, digite seu peso."}
              variant="outlined"
              label="Peso"
              type="number"
              id="peso"
              InputProps={{
                inputProps: {
                  step: "any",
                },
              }}
              fullWidth
              color="primary"
              style={{
                marginTop: "10px",
              }}
              error={errors.peso}
              {...register("peso")}
            />
            <TextField
              helperText={errors.altura && "Por favor, digite sua altura."}
              variant="outlined"
              size="large"
              label="Altura"
              type="number"
              id="altura"
              InputProps={{
                inputProps: {
                  step: "any",
                },
              }}
              fullWidth
              color="primary"
              style={{
                marginTop: "10px",
              }}
              error={errors.altura}
              {...register("altura")}
            />
            <TextField
              helperText={errors.idade && "Por favor, digite sua idade."}
              variant="outlined"
              label="Idade"
              type="number"
              id="idade"
              fullWidth
              color="primary"
              style={{
                marginTop: "10px",
              }}
              error={errors.altura}
              {...register("idade")}
            />
          </Grid>
        )}

        <Grid />

        <Grid container justifyContent="center" fullWidth margin="20px">
          <Pagination
            count={3}
            page={page}
            onChange={(event, page) => {
              setpage(page);
            }}
          />
        </Grid>
        <Grid container justifyContent="center" fullWidth>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
          >
            Descobrir
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MeasureForm;

// 66 + (13,7 x kg) + (5,0 x cm) - (6,8 x idade)

// 66 + (13,7 x 80) + (5,0 x 180) - (6,8 x 25)

// 66 + 1096 + 900 +170 + 500
