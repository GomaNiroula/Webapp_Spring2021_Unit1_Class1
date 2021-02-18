function updateCountryView(){
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value == "Yes"){
        divCountry.classList.remove("invisible");
    }
    else{
        divCountry.classList.add("invisible");
    }
}

function validateForm() {
    var DoB = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError");
    var formIsValid = true;
   
    if(DoB.value == ""){
        //Show error
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The DOB can't be empty!"
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate) {
            //Show error
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "DOB must be before today's date."
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else{
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");
        }
    }

    //Check 2
    var ddCountry = document.querySelector("#ddCountry");
    if(ddCountry.value == "Yes") {
        var txtCountry = document.querySelector("#txtCountry");
        if(txtCountry.value == ""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            divCountryError.innerHTML = "You must provide at least 1 country name"
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else {
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~', '&', '<', '>', '"', "'"];
    for (let i = 0; i < elements.length; i++) {
        for(let j = 0; j < invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1){
                elements[i].classList.add("hasError");
                alert("That is not a valid character. Please enter a valid character.");
                formIsValid = false;
            }
        }
    }
    return formIsValid;
}
