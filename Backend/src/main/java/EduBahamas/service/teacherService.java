package EduBahamas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.entity.teacher;
import EduBahamas.repository.teacherRepository;

@Service
public class teacherService {
    private final teacherRepository teacherRepository;

    @Autowired
    public teacherService(teacherRepository teacherRepository){
        this.teacherRepository = teacherRepository;
    }

    public List<teacher> getTeachers(){
        return teacherRepository.findAll();
    }

    public void addNewTeacher(teacher teacher){
        Optional<teacher> teacherByEmail = teacherRepository.findTeacherByEmail(teacher.getEmail());

        if (teacherByEmail.isPresent()) {
            throw new IllegalStateException("This email already exists");
        }
        teacherRepository.save(teacher);
    }

    public Boolean teacherExists(String email){
        Optional<teacher> teacher = teacherRepository.findTeacherByEmail(email);
        return teacher.isPresent();
    }
}
