export default function LoginError2(values) {
  let errors = {};
  
  if (!values.email) {
      errors.email = "Email is required";
  } else if (!values.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      errors.email = "Please Enter Valid Email Address ";
    }

  if (!values.password) {
      errors.password = "password is required";
    } else if (!values.password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
      errors.password = "<em>Password should be at least 8 characters long and should contain a combination of <strong> one uppercase letter, one lowercase letter, one number, and one special character. </strong></em>";
    }
  return errors;
}
/* ^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$ */