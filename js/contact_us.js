function validatename(){
    var re = /^[A-Za-z]+$/;
    if((re.test(document.getElementById("FName").value))&(re.test(document.getElementById("LName").value))){
       alert("Your Message Has Been Submitted. Thank You.!");
       ("myForm").submit();
     }
    else{
       alert("First Name and Last Name must contain only alphabets.");
       event.preventDefault();
     }
}
