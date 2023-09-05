import PasswordValidator from "password-validator";

const passwordSchema = new PasswordValidator();

passwordSchema
  .is()
  .min(8) // minimum 8 length
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // must have at least 1 digit
  .has()
  .not()
  .spaces(); // must contain spcaes

export default passwordSchema;
