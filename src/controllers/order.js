import Orders from "../models/orders.js";
import * as functions from "../service/functions.js";
// đặt hàng 
export const OrderUser = async (req, res, next) => {
    try {
        let { address, phone, id_user, id_product } = req.body;
        if (!address) return functions.setError(res, "Vui lòng nhập vào địa chỉ", 400)
        if (!phone) return functions.setError(res, "Vui lòng nhập vào số điện thoại", 400)
        if (!id_product) return functions.setError(res, "Vui lòng nhập vào id sản phẩm", 400)
        if (!address) return functions.setError(res, "Vui lòng nhập vào iid người mua", 400)

        if (id_user && id_product && phone && address) {
            let checkId = await Orders.findOne({}, { id_order: 1 }).sort({ id_order: -1 }).lean();
            let id_order = checkId ? checkId.id_order + 1 : 1;
            await Orders.create({
                id_order,
                address,
                phone,
                status: 1,
                date_created: new Date(),
                id_user,
                id_product
            });
            return functions.success(res, `Đặt hàng thành công với id_product: ${id_product}`)
        }
        return functions.setError(res, 'Missing data', 400)
    } catch (error) {
        return functions.setError(res, error.message)
    }
};

// chi tiết đơn hàng
export const GetDetailOrder = async (req, res, next) => {
    try {
        let id = Number(req.query.id);
        let data = await Orders.findOne({ id_order: id }).lean();
        return functions.success(res, "get data success", { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}
export const GetAllOrder = async (req, res, next) => {
    try {
        
        let data = await Orders.find({});
        return functions.success(res, "get data success", { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        const {_id}=req.query;
        let data = await Orders.deleteOne({_id});
        return functions.success(res, "delete data success", { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}
export const updateOrder = async (req, res, next) => {
    try {
        const {_id,address,phone,status}=req.query;
        var dd={};
        if(address!="")dd={...dd,...{address}};
        if(phone!="")dd={...dd,...{phone}};
        if(status!="")dd={...dd,...{status}};

        console.log(req.query)
        let data = await Orders.updateOne({_id},{ $set: dd });
        return functions.success(res, "update data success", { data })
    } catch (error) {
        return functions.setError(res, error.message)
    }
}

