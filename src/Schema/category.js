import Joi from "joi";
export const CategorySchema = joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Category không được để trống",
      "any.required": "Trường Category này là bắt buộc",
      "string.base": "Category phải là 1 String",
    }),
    desciption: Joi.string().required().min(10).messages({
        "string.desciption": "Mô tả không đủ độ dài yêu cầu",
        "string.empty": "Mô tả không được để trống",
      }),
  });