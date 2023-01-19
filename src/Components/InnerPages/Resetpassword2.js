export default function ResetPassword2(values) {
    let errors = {};
    
    if (!values.old_password) {
        errors.old_password = "Old Password is required";
    } 
  
    if (!values.new_password) {
        errors.new_password = "New Password is required";
      } else if (!values.new_password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        errors.new_password = "Password should be at least 8 characters long and should contain a combination of one uppercase letter, one lowercase letter, one number, and one special character.";
      }

      if (!values.re_enter_password) {
        errors.re_enter_password = "Re-password is required";
      } else if (values.re_enter_password !== values.new_password) {
        errors.re_enter_password = "Please Enter the Same Password";
      }  

    
    return errors;
  }