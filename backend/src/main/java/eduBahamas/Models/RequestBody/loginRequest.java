package eduBahamas.Models.RequestBody;

public class loginRequest{
    String email;
    String password;
    
    public loginRequest(String email, String password){
        this.email = email;
        this.password = password;
    }

    public String getEmail(){
        return email;
    }
    public String getPassword(){
        return password;
    }
}
