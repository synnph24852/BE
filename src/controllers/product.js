import Product from "../models/product";
import { productSchema } from "../Schema/product";
export const getAll = async (req, res) => {
  try {
    const products = await Product.find({ is_deleted: false });
    if (products.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào !",
      });
    }
    return res.json({
      message: "Lấy danh sách sản phẩm thành công !",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.json({
        message: "Lấy sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Lấy 1 sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
export const create = async (req, res) => {
  try {
    //validate
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
    //check name
    const productAll = await Product.find();
    const productName = productAll.find(
      (product) => product.name.toLowerCase() === req.body.name.toLowerCase()
    );
    if (productName) {
      return res.status(400).json({
        message: "Tên sản phẩm đã tồn tại !",
      });
    }
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        message: "Thêm sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công !",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    //validate
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    //check name
    const productAll = await Product.find();
    const productName = productAll.find(
      (product) => product.name.toLowerCase() === req.body.name.toLowerCase()
    );
    if (productName) {
      return res.status(400).json({
        message: "Tên sản phẩm đã tồn tại !",
      });
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Cập nhật sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { is_deleted: true },
      { new: true }
    );
    if (!product) {
      return res.json({
        message: "Xóa sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Xóa sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
// export const remove = async (req, res) => {
//   try {
//     const deletedProduct = await Product.findByIdAndDelete(req.params.id);

//     if (!deletedProduct) {
//       return res.json({
//         message: "Xóa sản phẩm không thành công hoặc sản phẩm không tồn tại!",
//       });
//     }

//     return res.json({
//       message: "Xóa sản phẩm thành công!",
//       product: deletedProduct,
//     });
//   } catch (error) {
//     if (error.name === "CastError") {
//       return res.status(400).json({ message: "Id không hợp lệ" });
//     }
//   }
// };
