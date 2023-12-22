const SignupModel = require("../Model/Model");
const createSignup = async (password, user, course, userType, email) => {
  return await SignupModel.create({password, user, course, userType, email});

  }
  
  module.exports = { createSignup };
  