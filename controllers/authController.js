import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, lastName, email, password } = req.body;
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required");
  }

  const user = await userModel.create({ name, lastName, email, password });
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User registered successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next("please provide all fields");
  }
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid credentials");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Suucess",
    user,
    token,
  });
};
