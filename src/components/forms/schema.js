import * as yup from "yup";

const schema = yup.object({
  weight: yup.number().positive().required("Digite seu peso"),
  height: yup.number().positive().required("Digite sua altura"),
  age: yup.number().positive().required("Digite sua idade"),
  gender: yup.string().required(),
  activity: yup.string().required(),
});

export default schema;
