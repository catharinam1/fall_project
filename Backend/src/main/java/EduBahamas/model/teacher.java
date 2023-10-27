package EduBahamas.model;

import org.mindrot.jbcrypt.BCrypt;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class teacher {
    @Id
    @SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_sequence")
    Long id;

    String firstName;
    String lastName;

    @JsonIgnore
    String password;
    
    String email;
    String school;

    public teacher(){
    }

    public teacher(Long id, String firstName, String lastName, String password, String email, String school){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
        this.email = email;
        this.school = school;
    }

    public teacher(String firstName, String lastName, String password, String email, String school){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
        this.email = email;
        this.school = school;
    }

    public Long getId(){
        return id;
    }
    public void setId(Long id){
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

    public String toString(){
        return "teacher{" +
                "id=" + id +
                ", firstname='" + firstName + '\'' +
                ", lastname='" + lastName + '\'' +
                ", email='" + email + '\'' +
                // ", password='" + password + '\'' +
                ", school=" + school +
                '}';
    }
}
