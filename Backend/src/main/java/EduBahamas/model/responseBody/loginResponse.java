package EduBahamas.model.responseBody;

public class loginResponse {
    private Long id;
    private String role;

    public loginResponse(Long id, String role){
        this.id = id;
        this.role = role;
    }

    public void setId(Long id){
        this.id = id;
    }
    public void setRole(String role){
        this.role = role;
    }

    public String toString(){
        return "{" +
                "role=" + role +
                ", id='" + id +
                '}';
    }

}
