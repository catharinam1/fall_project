package eduBahamas.Service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eduBahamas.Models.Collections.student;
import eduBahamas.Models.Collections.teacher;
import eduBahamas.Models.RequestBody.loginRequest;
import eduBahamas.Models.ResponseBody.loginResponse;
import eduBahamas.Repository.studentRepository;
import eduBahamas.Repository.teacherRepository;

@Service
public class loginService {
    private final teacherRepository teacherRepository;
    private final studentRepository studentRepository;

    @Autowired
    public loginService(studentRepository studentRepository, teacherRepository teacherRepository){
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
    }

    public Boolean validatePassword(String attemptedPassword, String password){
        return BCrypt.checkpw(password, attemptedPassword);
    }

    public Object validateUser(loginRequest userLogin){        
        Optional<student> student = studentRepository.findStudentByEmail(userLogin.getEmail());
        if(student.isPresent() == true && validatePassword(student.get().getPassword(), userLogin.getPassword()) == true){
            return new loginResponse(true, null, "Student");
        }

        Optional<teacher> teacher = teacherRepository.findTeacherByEmail(userLogin.getEmail());
        if(teacher.isPresent() == true && validatePassword(teacher.get().getPassword(), userLogin.getPassword()) == true){
            return new loginResponse(true, null, "Teacher");
        }
        return new loginResponse(false, null, null);
    }
}
