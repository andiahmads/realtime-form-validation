    // Input fields
const Name = document.getElementById('Name');
const UserName = document.getElementById('UserName');
const Password = document.getElementById('Password');
const Email = document.getElementById('Email');
const snbutton = document.getElementById('snbutton');



// jika ingini menggunakan silakan dirubah script yang dibawah ini sesuai dengan form dan id kalian
function validateFirstName() {
  // check if is empty
  if (checkIfEmpty(Name)) return;
  // is if it has only letters
  if (!checkIfOnlyLetters(Name)) return;
    if (!meetLength(Name, 4, 100)) return;


  return true;
}
function validateLastName() {
  // check if is empty
  if (checkIfEmpty(UserName)) return;
  // is if it has only letters
  if (!checkIfOnlyLetters(UserName)) return;
  if (!meetLength(UserName, 4, 100)) return;

  return true;
}
function validatePassword() {
  // Empty check
  if (checkIfEmpty(Password)) return;
  // Must of in certain length
  if (!meetLength(Password, 4, 100)) return;
  // check Password against our character set
  // 1- a
  // 2- a 1
  // 3- A a 1
  // 4- A a 1 @
  //   if (!containsCharacters(password, 4)) return;
  return true;
}
function validateEmail() {
  if (checkIfEmpty(Email)) return;
  if (!containsCharacters(Email, 5)) return;
  return true;
}








//ini adalah rule validation
//==================================|||||======================================
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    // set field invalid
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    // set field valid
    setValid(field);
    return false;
  }
}
function isEmpty(value) {
  if (value === '') return true;
  return false;
}
function setInvalid(field, message) {
   
  field.nextElementSibling.innerHTML = message;
}
function setValid(field) {
  field.nextElementSibling.innerHTML = '<html><i class="fa fa-check text-primary"></i></html>';
  //field.nextElementSibling.style.color = green;
}
function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(
      field,
      `${field.name} must be at least ${minLength} characters long`
    );
    return false;
  } else {
    setInvalid(
      field,
      `${field.name} must be shorter than ${maxLength} characters`
    );
    return false;
  }
}
function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:
      // letters
      regEx = /(?=.*[a-zA-Z])/;
      return matchWithRegEx(regEx, field, 'Must contain at least one letter');
    case 2:
      // letter and numbers
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        'Must contain at least one letter and one number'
      );
    case 3:
      // uppercase, lowercase and number
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        'Must contain at least one uppercase, one lowercase letter and one number'
      );
    case 4:
      // uppercase, lowercase, number and special char
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchWithRegEx(
        regEx,
        field,
        'Must contain at least one uppercase, one lowercase letter, one number and one special character'
      );
    case 5:
      // Email pattern
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(regEx, field, 'Must be a valid email address');
    default:
      return false;
  }
}
function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}

