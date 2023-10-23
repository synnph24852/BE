import Joi from "joi";
export const ContactSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "firstName không được để trống",
        "any.required": "Trường firstName này là bắt buộc",
        "string.base": "firstName phải là 1 string",
    }),
    email: joi.string().email().required().messages({
        "string.email": "Email không đúng định dạng",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",
    }),
    phone: Joi.number().required().messages({
        "Number.empty": "Phone không được để trống",
        "any.required": "Trường Phone này là bắt buộc",
        "number.base": "Phone phải là số",
    }),
    content: Joi.array().required().messages({
        "string.empty": "content không được để trống",
        "any.required": "Trường content này là bắt buộc ",
        "string.base": "content phải là 1 string",
    }),
});