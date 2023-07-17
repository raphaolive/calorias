import * as yup from "yup";

const schema = yup.object({
    peso: yup.number("Digite seu peso").positive().required(),
    altura:  yup.number().positive().required("Digite sua altura"),
    idade: yup.number().positive().required("Digite sua idade"),
})

export default schema