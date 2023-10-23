package EduBahamas.login;

import java.util.Optional;

import EduBahamas.student.student;

public class loginSuccess {
    private boolean success;
    private String message;
    private Optional<student> student;

    public loginSuccess(boolean success, String message, Optional<student> student){
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
