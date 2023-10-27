package EduBahamas.model.requestBody;

import EduBahamas.model.entity.student;

/*
 * POJO to represent the body of a student login request
*/

public class userLogin extends student{
    String email;
    String password;
    
    public userLogin(String email, String password){
        this.email = email;
        this.password = password;
    }

    public String getEmail(){
        return email;
    }
    public String getPassword(){
        return password;
    }

    public String toString(){
        return "{" +
                "email=" + getEmail() +
                ", password='" + getPassword() +
                '}';
    }
}
