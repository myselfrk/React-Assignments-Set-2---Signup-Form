export default function ValidateForm({
  name,
  email,
  gender,
  phoneNumber,
  password,
}) {
  let errors = {};
  // name
  if (name !== undefined && !name.trim()) {
    errors.name = "All fields are mandatory";
  } else if (!/^[0-9a-zA-Z ]+$/i.test(name)) {
    errors.name = "Name is not alphanumeric";
  }

  // email
  if (!email) {
    errors.email = "All fields are mandatory";
  } else if (!/^\S+@\S+$/i.test(email)) {
    errors.email = "Email must contain @";
  }
  // gender
  if (!gender) {
    errors.gender = "All fields are mandatory";
  }

  // phoneNumber
  if (!phoneNumber) {
    errors.phoneNumber = "All fields are mandatory";
  } else if (!/^[0-9]+$/i.test(phoneNumber)) {
    errors.phoneNumber = "Phone Number must contain only numbers";
  }

  // password
  if (!password) {
    errors.password = "All fields are mandatory";
  } else if (password.length < 6) {
    errors.password = "Password must contain atleast 6 letters";
  }

  return errors;
}
