import Joi from "joi";
export const InformationSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Tiêu đề không được để trống",
    "any.required": "Trường tiêu đề này là bắt buộc",
    "string.base": "Tiêu đề phải là 1 string",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email không đúng định dạng",
    "string.empty": "Email không được để trống",
    "any.required": "Trường email là bắt buộc",
  }),
  phone: Joi.number().required().messages({
    "Number.empty": "Phone không được để trống",
    "any.required": "Trường Phone này là bắt buộc",
    "number.base": "Phone phải là số",
  }),
  image: Joi.array().required().messages({
    "string.empty": "image không được để trống",
    "any.required": "Trường image này là bắt buộc ",
    "string.base": "image phải là 1 string",
  }),
  logo: Joi.array().required().messages({
    "string.empty": "logo không được để trống",
    "any.required": "Trường logo này là bắt buộc ",
    "string.base": "logo phải là 1 string",
  }),
  address: Joi.string().required().messages({
    "string.empty": "Địa chỉ không được để trống",
    "any.required": "Địa chỉ này là bắt buộc",
    "string.base": "Địa chỉ phải là 1 string",
  }),
  nameStore: Joi.string().required().messages({
    "string.empty": "Tên store không được để trống",
    "any.required": "Tên store này là bắt buộc",
    "string.base": "Tên store phải là 1 string",
  }),
  status: Joi.string().valid("active", "deactive").required().messages({
    "string.empty": "Trạng thái không được để trống",
    "any.required": "Trường Trạng thái này là bắt buộc",
    "string.base": "Trạng thái phải là 1 string",
  }),
});
