package EduBahamas.service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.student;
import EduBahamas.model.requestBody.studentLogin;
import EduBahamas.model.responseBody.userResponse;
import EduBahamas.repository.studentRepository;

@Service
public class loginService {
    private final studentRepository studentRepository;

    @Autowired
    public loginService(studentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public Object validateUser(studentLogin studentLogin){
        Optional<student> student = studentRepository.findStudentByEmail(studentLogin.getEmail());
        String attemptedPassword = studentLogin.getPassword();
        String password = student.get().getPassword();
        Boolean passwordsMatch = BCrypt.checkpw(attemptedPassword, password);
        
        if(student.isPresent() && (passwordsMatch == true)){
            userResponse message = new userResponse(true, null, student);
            return message;
        } else{
            userResponse message = new userResponse(true, "incorrect email or password");
            return message;
        }
    }

    public java.util.List<student> testLogin(){
        return studentRepository.findAll();
    }
    
}
