package EduBahamas.student;

public class studentLogin extends student{
    String email;
    String password;
    public studentLogin(String email, String password){
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
