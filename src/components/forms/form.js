import { useContext, useState } from "react";
import DataProvider from "../../context/DataProvider";
import schema from "./schema";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Pagination,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InfoIcon from "@mui/icons-material/Info";
import { useFormik } from "formik";

const MeasureForm = () => {
  const { setKcal, scrollDown } = useContext(DataProvider);
  const [page, setpage] = useState(1);

  const formik = useFormik({
    initialValues: {
      weight: "",
      height: "",
      age: "",
      gender: "",
      activity: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      let tmb;
      if (values.gender === "male") {
        tmb =
          (88.362 +
            13.397 * values.weight +
            4.799 * (values.height * 100) -
            5.677 * values.age) *
          Number(values.activity);
      }

      if (values.gender === "female") {
        tmb =
          (447.593 +
            9.247 * values.weight +
            3.098 * (values.height * 100) -
            4.330 * values.age) *
          Number(values.activity);
      }

      setKcal(tmb);
      scrollDown();
    },
  });

  return (
    <Container
      style={{
        position: "relative",
        background: "rgb(235 239 241)",
        padding: "40px",
        borderRadius: "8px",
        height: "450px",
        maxWidth: "1000px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Descubra suas calorias.</Typography>
          </Grid>

          {page === 1 && (
            <Grid item xs={12} marginTop="30px">
              <FormControl>
                <FormLabel variant="p">Selecione o seu gênero:</FormLabel>
                <RadioGroup
                  error={formik.errors.gender && formik.touched.gender}
                  arial-labbel="gender"
                  name="gender"
                  id="gender"
                  value={formik.values.gender}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setTimeout(() => {
                      setpage(2);
                      console.log("foi");
                    }, 500);
                    clearTimeout();
                  }}
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
                {formik.errors.gender && (
                  <FormHelperText style={{ color: "red" }} variant="filled">
                    Peso é obrigatório.
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          )}

          {page === 2 && (
            <Grid item xs={12}>
              <Tooltip
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "30px",
                }}
                title={
                  <>
                    <p>Sedentário (pouco ou nenhum exercício)</p>
                    <p>
                      Pouco ativo (exercício leve ou esportes 1-3 dias por
                      semana);
                    </p>
                    <p>
                      Pouco ativo (exercício leve ou esportes 1-3 dias por
                      semana);
                    </p>
                    <p>
                      Moderadamente ativo (exercício moderado ou esportes 3-5
                      dias por semana);
                    </p>
                    <p>
                      Ativo (exercício intenso ou esportes 6-7 dias por semana);
                    </p>
                    <p>
                      Muito ativo (exercício muito intenso, esportes, trabalho
                      físico ou treinamento duas vezes por dia);
                    </p>
                  </>
                }
                arrow
                enterDelay={200}
                leaveDelay={400}
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>

              <FormControl>
                <FormLabel variant="p">Fator de atividade:</FormLabel>
                <RadioGroup
                  error={formik.errors.activity && formik.touched.activity}
                  arial-labbel="activity"
                  name="activity"
                  id="activity"
                  value={formik.values.activity}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setTimeout(() => {
                      setpage(3);
                    }, 500);
                    clearTimeout();
                  }}
                >
                  <FormControlLabel
                    value="1.2"
                    control={<Radio color="primary" />}
                    label="Sedentário"
                  />

                  <FormControlLabel
                    value="1.375"
                    control={<Radio color="primary" />}
                    label="Pouco ativo"
                  />
                  <FormControlLabel
                    value="1.55"
                    control={<Radio color="primary" />}
                    label="Moderadamente ativo"
                  />
                  <FormControlLabel
                    value="1.725"
                    control={<Radio color="primary" />}
                    label="Ativo"
                  />
                  <FormControlLabel
                    value="1.9"
                    control={<Radio color="primary" />}
                    label="Muito ativo"
                  />
                </RadioGroup>
                {formik.errors.activity && formik.touched.activity && (
                  <FormHelperText style={{ color: "red" }} variant="filled">
                    Fator de atividade é obrigatório.
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          )}

          {page === 3 && (
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Qual é o seu peso?"
                type="number"
                id="weight"
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
                error={formik.errors.weight && formik.touched.weight}
                value={formik.values.weight}
                onChange={formik.handleChange}
              />
              <TextField
                variant="outlined"
                size="large"
                label="Qual é a sua altura?"
                type="number"
                id="height"
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
                error={formik.errors.height && formik.touched.height}
                value={formik.values.height}
                onChange={formik.handleChange}
              />
              <TextField
                variant="outlined"
                label="Quantos anos você tem?"
                type="number"
                id="age"
                fullWidth
                color="primary"
                style={{
                  marginTop: "10px",
                }}
                error={formik.errors.age && formik.touched.age}
                value={formik.values.age}
                onChange={formik.handleChange}
              />
            </Grid>
          )}
          <Box
            style={{
              position: "absolute",
              bottom: "30px",
              left: "0",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pagination
              count={3}
              page={page}
              style={{ margin: "20px" }}
              onChange={(event, page) => {
                setpage(page);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SendIcon />}
            >
              Descobrir
            </Button>
          </Box>
          <Grid />
        </Grid>
      </form>
    </Container>
  );
};

export default MeasureForm;

// 66 + (13,7 x kg) + (5,0 x cm) - (6,8 x idade)

// 66 + (13,7 x 80) + (5,0 x 180) - (6,8 x 25)

// 66 + 1096 + 900 +170 + 500
