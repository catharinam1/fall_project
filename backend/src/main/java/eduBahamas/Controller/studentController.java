package eduBahamas.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import eduBahamas.Models.Collections.student;
import eduBahamas.Service.studentService;

@RestController
@RequestMapping(path = "api/v1/student")
@CrossOrigin
public class studentController {
    private final studentService studentService;

    @Autowired
    public studentController(studentService studentService){
        this.studentService = studentService;
    }

    @GetMapping
    public List<student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
