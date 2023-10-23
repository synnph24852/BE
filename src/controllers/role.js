import Role from "../models/role";

// Tạo một vai trò mới
export const createRole = async (req, res) => {
  try {
    const { role_id, role_name, description, trang_thai } = req.body;
    const role = new Role({ role_id, role_name, description, trang_thai });
    const newRole = await role.save();
    res.status(200).json(newRole);
  } catch (error) {
    res.status(500).json({ error: "Could not create role" });
  }
};

// Lấy danh sách các vai trò
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve roles" });
  }
};

// Lấy thông tin một vai trò cụ thể dựa trên role_id
export const getRoleById = async (req, res) => {
  try {
    const role = await Role.findOne({ role_id: req.params.roleId });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve role" });
  }
};

// Cập nhật thông tin một vai trò cụ thể dựa trên role_id
export const updateRole = async (req, res) => {
  try {
    const { role_id, role_name, description, trang_thai } = req.body;
    const role = await Role.findOne({ role_id: req.params.roleId });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    role.role_id = role_id;
    role.role_name = role_name;
    role.description = description;
    role.trang_thai = trang_thai;
    const updatedRole = await role.save();
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: "Could not update role" });
  }
};

// Xóa một vai trò cụ thể dựa trên role_id
export const deleteRole = async (req, res) => {
  try {
    const role = await Role.findOne({ role_id: req.params.roleId });
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    await role.remove();
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete role" });
  }
};
