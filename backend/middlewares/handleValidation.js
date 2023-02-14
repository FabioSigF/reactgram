const {validationResult} = require("express-validator");

const validate = (req, res, next) => {
  //o next é para prosseguir ou não de acordo com a validação

  const errors = validationResult(req);

  if(errors.isEmpty())
  {
    return next();
  }

  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push(err.msg));

  return res.status(422).json({
    errors: extractedErrors
  })
}

module.exports = validate;