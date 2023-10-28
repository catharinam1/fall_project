package eduBahamas.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eduBahamas.Models.Collections.teacher;
import eduBahamas.Repository.teacherRepository;

@Service
public class teacherService {
    private final teacherRepository teacherRepository;

    @Autowired
    public teacherService(teacherRepository teacherRepository){
        this.teacherRepository = teacherRepository;
    }

    public List<teacher> getAllTeachers(){
        return teacherRepository.findAll();
    }

    public void addNewTeacher(teacher teacher){
        teacherRepository.insert(teacher);
    }

    public Boolean teacherExists(String email){
        Optional<teacher> teacher = teacherRepository.findTeacherByEmail(email);
        return teacher.isPresent();
    }
}
