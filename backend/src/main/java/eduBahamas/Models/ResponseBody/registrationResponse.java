package eduBahamas.Models.ResponseBody;

public class registrationResponse {
    private boolean success;
    private String message;
    private Object user;

    public registrationResponse(boolean success, String message){
        this.success = success;
        this.message = message;
    }
    public registrationResponse(boolean success, String message, Object user){
        this.success = success;
        this.message = message;
        this.user = user;
    }

    public boolean getSuccess(){
        return success;
    }
    public void setSuccess(boolean success){
        this.success = success;
    }

    public String getMessage(){
        return message;
    }
    public void setMessage(String message){
        this.message = message;
    }

    public Object getuser(){
        return user;
    }
    public void setuser(Object user){
        this.user = user;
    }
}
