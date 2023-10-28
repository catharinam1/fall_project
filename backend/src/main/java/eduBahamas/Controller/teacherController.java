package eduBahamas.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eduBahamas.Models.Collections.teacher;
import eduBahamas.Service.teacherService;

@RestController
@RequestMapping(path = "api/v1/teacher")
public class teacherController {
    private final teacherService teacherService;

    @Autowired
    public teacherController(teacherService teacherService){
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<teacher> getAllTeachers(){
        return teacherService.getAllTeachers();
    }

    
}
