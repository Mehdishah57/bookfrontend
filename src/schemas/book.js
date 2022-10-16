import * as yup from "yup";

const schema = yup.object({
    name: yup
        .string()
        .min(3, "Minimum length for book name: 3")
        .max(255, "Maximum length for book name: 255")
        .required("Book name can't be empty"),
    book: yup
        .mixed()
        .required("Book must be attached")
        .test("FILE_TYPE", "You can only upload pdf files", book => book && book.type === "application/pdf"),
    category: yup
        .string()
        .required("Category must be selected"),
    public: yup
        .bool()
})

export default schema;