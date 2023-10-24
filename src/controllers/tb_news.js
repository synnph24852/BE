// giống category
import { newsSchema } from "../Schema/product";
import News from "../models/tb_news";
import Image_news from "../models/image_news";
export const getAll = async (req, res) => {
  try {
    const data = await News.find();

    if (data.length == 0) {
      return res.status(404).json({ message: "Lấy tất cả " });
    } else {
      return res.status(200).json(data);
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export const get = async (req, res) => {
  try {
    const data = await News.findById(req.params.id).populate("image_news");
    if (data.length == 0) {
      return res.status(400).json({ message: "Lấy ảnh thất bại" });
    } else {
      const image_news = await Image_news.find({ Id_news: req.params.id });

      return res.status(200).json({
        ...data.toObject(),
        image_news,
      });
    }
  } catch (error) {
    if (error.tieude === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
export const add = async (req, res) => {
  try {
    //validate
    const { error } = newsSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const data = await News.create(req.body);
    if (data.length == 0) {
      return res.status(400).json({ message: "Thêm  tin tức thất bại" });
    } else {
      return res.status(200).json({
        message: "Thêm tin tức thành công",
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: message });
  }
};
export const update = async (req, res) => {
  try {
    //validate
    const { error } = newsSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const data = await News.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (data.length == 0) {
      return res.status(400).json({ message: "Cập nhật tin tức thất bại" });
    } else {
      return res.status(200).json({
        message: "Cập nhật tin tức thành công",
        data,
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
export const deletenews = async (req, res) => {
  try {
    const data = await News.findByIdAndDelete(req.params.id);
    if (data.length == 0) {
      return res.status(400).json({ message: "Xóa tin tức thất bại" });
    } else {
      return res.status(200).json({
        message: "Xóa tin tức thành công",
        data,
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
