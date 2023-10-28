package eduBahamas.Models.Collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import org.mindrot.jbcrypt.BCrypt;

@Data
@Document
public class teacher {
    @Id
    String id;

    String firstName;
    String lastName;

    @Indexed(unique = true)
    String password;

    String email;
    String school;

    public teacher(){
    }

    public teacher(String firstName, String lastName, String password, String email, String school){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
        this.email = email;
        this.school = school;
    }

    public String getId(){
        return id;
    }
    public void setId(String id){
        this.id = id;
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
}
