package eduBahamas.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eduBahamas.Models.Collections.student;
import eduBahamas.Repository.studentRepository;

@Service
public class studentService {
    private final studentRepository studentRepository;

    @Autowired
    public studentService(studentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public List<student> getAllStudents(){
        return studentRepository.findAll();
    }

    public void addNewStudent(student student){
        studentRepository.insert(student);
    }

    public Boolean studentExists(String email){
        Optional<student> student = studentRepository.findStudentByEmail(email);
        return student.isPresent();
    }
}
