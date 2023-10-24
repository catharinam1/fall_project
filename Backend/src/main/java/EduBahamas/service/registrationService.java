package EduBahamas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.repository.studentRepository;
import EduBahamas.model.requestBody.registerRequest;
import EduBahamas.model.responseBody.loginMessage;
import EduBahamas.model.student;

@Service
public class registrationService {
    private final studentService studentService;

    @Autowired
    public registrationService(studentService studentService){
        this.studentService = studentService;
    }

    public Object registerUser(registerRequest registerRequest){
        String role = registerRequest.getRole();
        System.out.println(role);

        if (role.equals("student")){
            return registerStudent(registerRequest);
        }
        else{
            System.out.println("we do have this functionality yet");
            return false;
        }
    }

    public Object registerStudent(registerRequest registerRequest){
        if (studentService.studentExists(registerRequest.getEmail()) == false){
            student student = new student(registerRequest.getFirstName(),
                            registerRequest.getLastName(),
                            registerRequest.getPassword(),
                            registerRequest.getEmail(),
                            registerRequest.getScchool());

            studentService.addNewStudent(student);
            return new loginMessage(true, "", student);
        }
        System.out.println("email already exists");
        return false;
    }

    public void registerTeacher(registerRequest registerRequest){
        System.out.println("we do not have that functionality");
    }
}
