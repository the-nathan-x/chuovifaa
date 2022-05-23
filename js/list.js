function validate(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var product = document.getElementById("product").value;
    var number = document.getElementById("number").value;
    var description = document.getElementById("description").value;
    var file = document.getElementById("file").value;
    var agree = document.getElementById("agree").checked;
    var check = 0;
  
      // Validate name
      if(name == "") {
        document.getElementById("name_e").innerHTML = "Please enter your name";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            document.getElementById = "Please enter a valid name";
        } else {
            check++;
        }
    }

    // Validate email address
    if(email == "") {
        document.getElementById("email_e").innerHTML = "Please enter your email address";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            document.getElementById("email_e") = "Please enter a valid email address";
        } else{
            check++;
        }
    }


         // Validate mobile number
    if(mobile == "") {
        document.getElementById("phonenumber_e").innerHTML = "Please enter your mobile number";
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            document.getElementById("phonenumber_e").innerHTML = "Please enter a valid 10 digit mobile number";
        } else{
            check++;
        }
    }



    
        if(product == "")
        {
          document.getElementById("product_e").innerHTML = "Please enter product name";
        }
        else{
          check++;
        }

        if(number == 0)
        {
          document.getElementById("number_e").innerHTML = "Please enter number of products";
        }
        else{
          check++;
        }

        if(description == "")
        {
          document.getElementById("description_e").innerHTML = "Please enter product description";
        }
        else{
          check++;
        }

        if(file == "")
        {
          document.getElementById("file_e").innerHTML = "Please upload file";
        }
        else{
          check++;
          
        }
    
        
        if(agree == false)
        {
          document.getElementById("agree_e").innerHTML = "Please agree to terms and conditions";
        }
        else{
          check++;
          if(check == 8)
          {
              location.replace("products.html");
          }
        }
        


        
    
}
     


    

    
        
    


    