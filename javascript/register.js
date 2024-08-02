const openSidebar = document.getElementById('openSideBar');
const closeSidebar = document.getElementById('closeSidebar');

openSidebar.addEventListener('click', () => {
    const sidebarNav = document.querySelectorAll('.sidebarNav');
    if(document.body.clientWidth > 425){
        document.querySelector('.sidebar').style.width = '250px';
    }
    else document.querySelector('.sidebar').style.width = '100vw';
    document.querySelector('.sidebar').children[0].style.width = '100%';

    sidebarNav[0].children[0].style.height = '45px';
    sidebarNav[0].children[0].style.margin = '0 30px';
    sidebarNav.forEach((sidebar) => {
        sidebar.style.padding = '10px';
        sidebar.children[0].style.fontSize = '30px';
        sidebar.children[0].style.padding = '10px';
    });
});

closeSidebar.addEventListener('click', () => {
    const sidebarNav = document.querySelectorAll('.sidebarNav');
    document.querySelector('.sidebar').style.width = 0;
    document.querySelector('.sidebar').children[0].style.width = 0;

    sidebarNav[0].children[0].style.height = 0;
    sidebarNav[0].children[0].style.margin = 0;
    sidebarNav.forEach((sidebar) => {
        sidebar.style.padding = 0;
        sidebar.children[0].style.fontSize = 0;
        sidebar.children[0].style.padding = 0;
    });
});

window.addEventListener('resize', () => {
    if(document.body.clientWidth > 768){
        const sidebarNav = document.querySelectorAll('.sidebarNav');
        document.querySelector('.sidebar').style.width = 0;
        document.querySelector('.sidebar').children[0].style.width = 0;

        sidebarNav[0].children[0].style.height = 0;
        sidebarNav[0].children[0].style.margin = 0;
        sidebarNav.forEach((sidebar) => {
            sidebar.style.padding = 0;
            sidebar.children[0].style.fontSize = 0;
            sidebar.children[0].style.padding = 0;
        });
    }
});

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailInput = document.getElementById('emailInput');
const addressInput = document.getElementById('addressInput');
const genderInput = document.getElementsByName('gender');
const DOBInput = document.getElementById('DOBInput');
const password = document.getElementById('passInput');
const confPassword = document.getElementById('confPassInput');
const checkbox = document.getElementById('agreement');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    const isNameValid = nameCheck(firstName.value, lastName.value);
    const isEmailValid = emailCheck(emailInput.value);
    const isAddressValid = addressCheck(addressInput.value);
    const isGenderValid = genderCheck(genderInput);
    const isDOBValid = DOBCheck(DOBInput.value);
    const isPasswordValid = passwordCheck(password.value);
    const isConfPasswordValid = confirmPasswordCheck(confPassword.value, password.value);
    const isCheckboxChecked = isCheckboxChecking(checkbox);

    console.log(firstName.value);
    console.log(lastName.value);

    if(isNameValid && isEmailValid && isAddressValid && isGenderValid && isDOBValid && isPasswordValid && isConfPasswordValid && isCheckboxChecked){
        alert('sign in sucessful');
        location.href = 'index.html';
    }
});

const nameCheck = (firstName, lastName) => {
    if(firstName === '' || lastName === ''){
        document.getElementById('nameError').innerHTML = "Name mustn't be empty!";
        return false;
    }
    else if(firstName.length < 6 && lastName.length < 6){
        document.getElementById('nameError').innerHTML = "Name should have more than 8 characters!";
        return false;
    }
    else if(!isAlpha(firstName) && !isAlpha(lastName)){
        document.getElementById('nameError').innerHTML = "Name must only contain alphabet!";
        return false;
    }
    else{
        document.getElementById('nameError').innerHTML = "";
        return true;
    }
}

const emailCheck = (email) => {
    if(email === ''){
        document.getElementById('emailError').innerHTML = "Email mustn't be empty!";
        return false;
    }
    else if(!(email.endsWith('@gmail.com') || email.endsWith('@binus.ac.id'))){
        document.getElementById('emailError').innerHTML = "Name should ends with @gmail.com or @binus.ac.id!";
        return false;
    }
    else{
        document.getElementById('emailError').innerHTML = "";
        return true;
    }
}

const addressCheck = (address) => {
    if(address === ''){
        document.getElementById('addressError').innerHTML = "Address mustn't be empty!";
        return false;
    }
    else{
        document.getElementById('addressError').innerHTML = "";
        return true;
    }
}

const genderCheck = (genders) => {
    let chooseGender = false;
    for(let i = 0; i < genders.length; i++){
        if(genders[i].checked){
            chooseGender = true;
            break;
        }
    }

    if(!chooseGender){
        document.getElementById('genderError').innerHTML = "You must choose a gender";
        return false;
    }
    else{
        document.getElementById('genderError').innerHTML = "";
        return true;
    }
}

const DOBCheck = (DOB) => {
    if(DOB === ''){
        document.getElementById('DOBError').innerHTML = "You must input your birth date!";
        return false;
    }
    else if(new Date(DOB) > new Date()){
        document.getElementById('DOBError').innerHTML = "Birth date must not exeed the current date!";
        return false;
    }
    else{
        document.getElementById('DOBError').innerHTML = "";
        return true;
    }
}

const passwordCheck = (password) => {
    if(password === ''){
        document.getElementById('passError').innerHTML = "Password mustn't be empty!";
        return false;
    }
    else if(!isAlphaNumeric(password)){
        document.getElementById('passError').innerHTML = "Password atleast contain 1 number";
        return false;
    }
    else{
        document.getElementById('passError').innerHTML = "";
        return true;
    }
}

const confirmPasswordCheck = (confPassword, password) => {
    if(confPassword != password){
        document.getElementById('confPassError').innerHTML = "Confirm password must be the same as password";
        return false;
    }
    else{
        document.getElementById('confPassError').innerHTML = "";
        return true;
    }
}

const isCheckboxChecking = (checkbox) => {
    if(!checkbox.checked){
        alert('You must agree to the terms and conditions!\n');
        return false;
    }
    else return true;
}

const isAlpha = (characters) => {
    for(const char of characters){
        if(char >= 'a' && char <= 'z') continue;
        else if(char >= 'A' && char <= 'Z') continue;
        else if(char === ' ') continue;
        else return false;
    }
    return true;
}

const isAlphaNumeric = (characters) => {
    let isNumber = false, isAlphabet = false;
    for(const char of characters){
        if(!isNaN(char)){
            isAlphabet = true;
        }
        else{
            isNumber = true;
        }

        if(isAlphabet && isNumber) return true;
    }

    return false;
}