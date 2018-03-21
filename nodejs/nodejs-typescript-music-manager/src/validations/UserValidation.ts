import joi = require('joi');

class UserValidation {
  public getRegistrationValidation(): any {
    return {
      body: {
        firstName: joi.string().required().min(5),
        lastName: joi.string().min(5),
        password: joi.string().min(8).max(18).required(),
        username: joi.string().min(5).max(10).required(),
      },
    };
  }
}

const userValidation = new UserValidation();
export default userValidation;
