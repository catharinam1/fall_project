package EduBahamas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.student;
import EduBahamas.repository.studentRepository;

@Service
public class studentService {
    private final studentRepository studentRepository;

    @Autowired
    public studentService(studentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public List<student> getStudents(){
        return studentRepository.findAll();
    }    

    public void addNewStudent(student student){
        Optional<student> studentByEmail = studentRepository.findStudentByEmail(student.getEmail());

        if (studentByEmail.isPresent()) {
            throw new IllegalStateException("This email already exists");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId){
        Boolean exists = studentRepository.existsById(studentId);

        if(exists == true){
            studentRepository.deleteById(studentId);
        }else{
            throw new IllegalStateException("Student with ID " + studentId + " does not exist");
        }
    }
}
