package EduBahamas.model.responseBody;

/*
 * This class represents a POJO to handle responses back to the client
 * Has success or fail along with a message specifying why and potentially the information about a user
 */


public class userResponse {
    private boolean success;
    private String message;
    private Object user;

    public userResponse(boolean success, String message){
        this.success = success;
        this.message = message;
    }
    public userResponse(boolean success, String message, Object user){
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

    public String toString(){
        return "{" +
                "success=" + getSuccess() +
                ", message='" + getMessage() + '\'' +
                "user=" + getuser() +
                '}';
    }


}
