//giống product
import Image_news from "../models/image_news";
import { image_newsSchema } from "../Schema/product";
export const getAll = async (req, res) => {

  //asc tăng dần
  const { order = "createdAt", _limit = 100, keyword = "asc", news, } = req.query;
  const filter = {};
  if (news) {

    filter["id_news"] = news; // Tạo bộ lọc cho trường Id_news
  }
  let option = {
    limit: _limit,
    sort: {
      [order]: keyword === "asc" ? 1 : -1,
    },
  };
  try {
    const image_news = await Image_news.paginate(filter, option);

    if (image_news.length === 0) {
      return res.json({
        message: "Không có tin tức nào !",
      });
    }
    return res.json({
      message: "Lấy danh sách tin tức thành công !",
      image_news,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const image_news = await Image_news.findById(req.params.id);
    if (!image_news) {
      return res.json({
        message: "Lấy sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Lấy 1 sản phẩm thành công !",
      image_news,
    });
  } catch (error) {
    if (error.tieude === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
export const create = async (req, res) => {
  try {
    //validate
    const { error } = image_newsSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
    // Lấy thông tin từ request body
    const {
      image,
      trang_thai,
      Id_news,
    } = req.body;

    // Tạo sản phẩm mới với thông tin đã được format
    const image_news = await Image_news.create({

      image,
      trang_thai,
      Id_news,
    });

    if (!image_news) {
      return res.json({
        message: "Thêm sản phẩm không thành công!",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      image_news,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    // Validate
    const { error } = image_newsSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
    // Lấy thông tin sản phẩm từ yêu cầu
    const updatedimage_news = req.body;
    // Tính toán số lượng tổng cộng từng kích thước và màu sắc
    // Cập nhật số lượng tổng cộng và trạng thái tồn kho
    // Cập nhật sản phẩm
    const image_news = await Image_news.findByIdAndUpdate(
      req.params.id,
      updatedimage_news,
      {
        new: true,
      }
    );

    if (!image_news) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công!",
      });
    }

    return res.json({
      message: "Cập nhật sản phẩm thành công!",
      image_news,
    });
  } catch (error) {
    if (error.tieude === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
    return res.status(400).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const image_news = await Image_news.findByIdAndDelete(req.params.id);
    if (!image_news) {
      return res.json({
        message: "Xóa sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Xóa sản phẩm thành công",
      image_news,
    });
  } catch (error) {
    if (error.tieude === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
