package EduBahamas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import EduBahamas.model.teacher;
import EduBahamas.service.teacherService;

@RestController
@RequestMapping(path="api/v1/teacher")
public class teacherController {
    private final teacherService teacherService;

    @Autowired
    public teacherController(teacherService teacherService){
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<teacher> getTeachers(){
        return teacherService.getTeachers();
    }

    @PostMapping
    public void addTeacher(@RequestBody teacher teacher){
        teacherService.addNewTeacher(teacher);
    }
    
}
