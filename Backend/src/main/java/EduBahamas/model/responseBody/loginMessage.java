package EduBahamas.model.responseBody;

import java.util.Optional;
import EduBahamas.model.student;

//TODO find a way to decouple the way messsages are outputted should they be different classes or not because this code is starting to have code smells

public class loginMessage {
    private boolean success;
    private String message;
    private Optional<student> student;
    private student s;

    public loginMessage(boolean success, String message){
        this.success = success;
        this.message = message;
    }
    public loginMessage(boolean success, String message, student student){
        this.success = success;
        this.message = message;
        this.s = student;
    }


    public loginMessage(boolean success, String message, Optional<student> student){
        this.success = success;
        this.message = message;
        this.student = student;
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

    public Optional<student> getStudent(){
        return student;
    }
    public void setStudent(Optional<student> student){
        this.student = student;
    }

    public String toString(){
        return "{" +
                "success=" + getSuccess() +
                ", message='" + getMessage() + '\'' +
                "student=" + getStudent() +
                '}';
    }


}
