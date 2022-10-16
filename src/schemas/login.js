import * as yup from "yup";

const schema = yup.object({
    email: yup
        .string()
        .email("Email is not valid")
        .min(5,"Minimum length for email: 5")
        .max(255, "Email is too long")
        .required("Email can't be empty"),
    password: yup
        .string()
        .min(8, "Minimum length for password: 8")
        .max(25, "Maximum length for password: 25")
        .required("Password can't be empty")
})

export default schema;