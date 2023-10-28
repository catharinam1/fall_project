package eduBahamas.Models.Collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import org.mindrot.jbcrypt.BCrypt;

@Data
@Document
public class student {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String school;

    public student(){
    }

    public student(String firstName, String lastName, String password, String email, String school, String role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
        this.email = email;
        this.school = school;
    }

    public student(String firstName, String lastName, String password, String email, String school){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
        this.email = email;
        this.school = school;
    }

    public String getId(){
        return id;
    }

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
    }

    public String getSchool(){
        return school;
    }
    public void setSchool(String school){
        this.school = school;
    }
}
