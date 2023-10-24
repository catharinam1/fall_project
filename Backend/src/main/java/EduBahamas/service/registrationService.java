package EduBahamas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.repository.studentRepository;
import EduBahamas.model.requestBody.registerRequest;
import EduBahamas.model.student;

@Service
public class registrationService {
    private final studentService studentService;

    @Autowired
    public registrationService(studentService studentService){
        this.studentService = studentService;
    }

    public void registerUser(registerRequest registerRequest){
        String role = registerRequest.getRole();

        if (role == "student"){
            registerStudent(registerRequest);
        }
        else{
            System.out.println("we do have this functionality yet");
        }
    }

    public void registerStudent(registerRequest registerRequest){
        //student student = new student(registerRequest.getFirstName(), registerRequest.getLastName(), registerRequest.getPassword(), null);
        studentService.addNewStudent(null);
    }
    public void registerTeacher(registerRequest registerRequest){
        System.out.println("we do not have that functionality");
    }
}
