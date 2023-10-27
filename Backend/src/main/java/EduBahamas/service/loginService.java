package EduBahamas.service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.student;
import EduBahamas.model.teacher;
import EduBahamas.model.requestBody.userLogin;
import EduBahamas.model.responseBody.loginResponse;
import EduBahamas.repository.studentRepository;
import EduBahamas.repository.teacherRepository;

@Service
public class loginService {
    private final studentRepository studentRepository;
    private final teacherRepository teacherRepository;

    @Autowired
    public loginService(studentRepository studentRepository, teacherRepository teacherRepository){
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
    }

    public Boolean validatePassword(String attemptedPassword, String password){
        return BCrypt.checkpw(password, attemptedPassword);
    }

    public Object validateUser(userLogin userLogin){        
        Optional<student> student = studentRepository.findStudentByEmail(userLogin.getEmail());
        if(student.isPresent() == true && validatePassword(student.get().getPassword(), userLogin.getPassword()) == true){
            return new loginResponse(true, student.get().getId(), "Student");
        }

        Optional<teacher> teacher = teacherRepository.findTeacherByEmail(userLogin.getEmail());     
        if(teacher.isPresent() == true && validatePassword(teacher.get().getPassword(), userLogin.getPassword()) == true){
            return new loginResponse(true, teacher.get().getId(), "Teacher");
        }

        return new loginResponse(false, null, null);
    }

    public java.util.List<student> testLogin(){
        return studentRepository.findAll();
    }
    
}
