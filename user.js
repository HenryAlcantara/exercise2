//imports fs and unique-string packages
import fs from 'fs';
import uniqueString from 'unique-string';

//function for saving user information
function saveUser(firstname, lastname, email, age){
    if(firstname.length != 0 && lastname.length != 0 && email.length != 0 && age >= 18){
        fs.appendFileSync("user.txt", firstname+","+lastname+","+email+","+age+","+uniqueString().substring(0, 10)+"\n");
    }
}

