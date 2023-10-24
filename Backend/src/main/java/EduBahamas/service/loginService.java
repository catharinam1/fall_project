package EduBahamas.service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.student;
import EduBahamas.model.requestBody.studentLogin;
import EduBahamas.model.responseBody.loginMessage;
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
            loginMessage message = new loginMessage(true, null, student);
            return message;
        } else{
            System.out.println("we do have this functionality");
            return false;
        }
    }

    public java.util.List<student> testLogin(){
        return studentRepository.findAll();
    }
    
}
