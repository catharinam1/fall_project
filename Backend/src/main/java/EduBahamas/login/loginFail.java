package EduBahamas.login;

public class loginFail {
    private boolean success;
    private String message;
    
    public loginFail(boolean success, String message){
        this.success = success;
        this.message = message;
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

    public String toString(){
        return "{" +
                "success=" + getSuccess() +
                ", message='" + getMessage() +
                '}';
    }
}
