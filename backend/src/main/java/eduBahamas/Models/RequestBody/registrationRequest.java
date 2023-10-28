package eduBahamas.Models.RequestBody;

public class registrationRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String school;
    private String role;

    public registrationRequest(String firstName, String lastName, String email, String password, String school, String role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.school = school;
        this.role = role;
    }

    public String getFirstName(){return firstName;}
    public String getLastName(){return lastName;}
    public String getEmail(){return email;}
    public String getPassword(){return password;}
    public String getSchool(){return school;}
    public String getRole(){return role;}
}
