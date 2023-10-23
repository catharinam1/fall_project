package EduBahamas.login;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.student.student;
import EduBahamas.student.studentLogin;
import EduBahamas.student.studentRepository;

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
            loginSuccess message = new loginSuccess(true, null, student);
            return message;
        } else{
            loginFail message = new loginFail(false, "incorrect email or password");
            return message;
        }
    }

    public java.util.List<student> testLogin(){
        return studentRepository.findAll();
    }
    
}
