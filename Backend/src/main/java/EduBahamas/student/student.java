package EduBahamas.student;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

//TODO: create password field
//TODO: seperate first and last name
//TODO: hashpassword and put it into the database
//TODO: implement checking to see if account exists and password is correct

@Entity
@Table
public class student{
    @Id
    @SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_sequence")
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private LocalDate dob;

    public student(){
    }

    public student(Long id, String firstName, String lastName, String password, String email, LocalDate dob){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.dob = dob;
    }

    public student(String firstName, String lastName, String password, String email, LocalDate dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.dob = dob;
    }

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public String getName(){
        return firstName + " " + lastName;
    }
    public void setName(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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
        this.password = password;
    }

    public LocalDate getDob(){
        return dob;
    }
    public void setDob(LocalDate dob){
        this.dob = dob;
    }

    public String toString(){
        return "Student{" +
                "id=" + id +
                ", name='" + getName() + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                '}';
    }


}