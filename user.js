//imports fs and unique-string packages
import fs from 'fs';
import uniqueString from 'unique-string';

//function for saving user information
function saveUser(firstname, lastname, email, age){
    if(firstname.length != 0 && lastname.length != 0 && email.length != 0 && age >= 18){
        fs.appendFileSync("users.txt", firstname+","+lastname+","+email+","+age+","+uniqueString().substring(0, 10)+"\n");
    }else{
        console.log("error.")
    }
}

//function to find user in users.txt
function findUser(email){
    let userList = fs.readFileSync("users.txt", "utf8").split("\n");
    let foundUser = [];
    for(let user of userList){
        if(user.split(",")[2] == email){
            foundUser.push({
                firstname: user.split(",")[0],
                lastname: user.split(",")[1],
                email: user.split(",")[2],
                age: user.split(",")[3]
            });
        }
    }
    
    return {
        users: foundUser,
        count: foundUser.length
    }
    
}

export default {saveUser, findUser}
