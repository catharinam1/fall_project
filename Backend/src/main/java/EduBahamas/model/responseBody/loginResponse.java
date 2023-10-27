package EduBahamas.model.responseBody;

public class loginResponse {
    private Boolean success;
    private Long id;
    private String role;

    public loginResponse(Boolean success, Long id, String role){
        this.success = success;
        this.id = id;
        this.role = role;
    }
    public Boolean getSuccess(){
        return this.success;
    }

    public void setSuccess(Boolean success){
        this.success = success;
    }

    public void setId(Long id){
        this.id = id;
    }
    public Long getId(){
        return this.id;
    }

    public void setRole(String role){
        this.role = role;
    }
    public String getRole(){
        return this.role;
    }

    public String toString(){
        return "{" +
                "success=" + success +
                ", role=" + role +
                ", id='" + id +
                '}';
    }

}
