package EduBahamas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import EduBahamas.model.entity.student;
import EduBahamas.service.studentService;

@RestController
@RequestMapping(path = "api/v1/student")
public class studentController {

    private final studentService studentService;

    @Autowired
    public studentController(studentService studentService){
        this.studentService = studentService;
    }

    @GetMapping
    public List<student> getStudents(){
        return studentService.getStudents();
    }
    /*
        * {
        "firstName": "",
        "lastName": "",
        "password": "",
        "email": "",
        "school": "",
        "role": ""
        }
     */

    @PostMapping
    public void registerNewStudent(@RequestBody student student){
        studentService.addNewStudent(student);
    }

    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long studentId){
        studentService.deleteStudent(studentId);
    }
    
}
