import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    email: yup.string().email("Email không đúng địng dạng"),
    password: yup.string().min(6, "Tối thiểu 6 ký tự")
})
export type FormLogin = yup.InferType<typeof schemaLogin>