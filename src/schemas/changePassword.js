import * as yup from "yup";

const schema = yup.object({
    oldPassword: yup
        .string()
        .min(8, "Minimum length for password: 8")
        .max(25, "Maximum length for password: 25")
        .required("Password can't be empty"),
    newPassword: yup
        .string()
        .min(8, "Minimum length for password: 8")
        .max(25, "Maximum length for password: 25")
        .required("Password can't be empty"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword')], 'Passwords do not match')
        .required('Passwords do not match')
});

export default schema;