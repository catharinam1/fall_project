package EduBahamas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.requestBody.registerRequest;
import EduBahamas.model.responseBody.userResponse;
import EduBahamas.model.student;
import EduBahamas.model.teacher;

@Service
public class registrationService {
    private final studentService studentService;
    private final teacherService teacherService;

    @Autowired
    public registrationService(studentService studentService, teacherService teacherService){
        this.studentService = studentService;
        this.teacherService = teacherService;
    }

    public Object registerUser(registerRequest registerRequest){
        String role = registerRequest.getRole();
        System.out.println(role);

        if (role.equals("student")){
            return registerStudent(registerRequest);
        }
        else{
            return registerTeacher(registerRequest);
        }
    }

    public Object registerStudent(registerRequest registerRequest){
        if (studentService.studentExists(registerRequest.getEmail()) == false){
            student student = new student(registerRequest.getFirstName(),
                            registerRequest.getLastName(),
                            registerRequest.getPassword(),
                            registerRequest.getEmail(),
                            registerRequest.getSchool());

            studentService.addNewStudent(student);
            return new userResponse(true, "", student);
        }
        System.out.println("email already exists");
        return "Email already exists";
        // return false;
    }

    public Object registerTeacher(registerRequest registerRequest){
        if (teacherService.teacherExists(registerRequest.getEmail()) == false){
            teacher teacher = new teacher(registerRequest.getFirstName(),
                            registerRequest.getLastName(),
                            registerRequest.getPassword(),
                            registerRequest.getEmail(),
                            registerRequest.getScchool());

            teacherService.addNewTeacher(teacher);
            return new userResponse(true, "", teacher);
        }
        return new userResponse(false, "This email is already taken", null);
    }
}
