package eduBahamas.Models.ResponseBody;

public class loginResponse {
    private Boolean success;
    private String id;
    private String role;

    public loginResponse(Boolean success, String id, String role){
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

    public void setId(String id){
        this.id = id;
    }
    public String getId(){
        return this.id;
    }

    public void setRole(String role){
        this.role = role;
    }
    public String getRole(){
        return this.role;
    }  
}
