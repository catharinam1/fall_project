package EduBahamas.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import EduBahamas.model.entity.teacher;

@Repository
public interface teacherRepository extends JpaRepository<teacher, Long>{
    
    Optional<teacher> findTeacherByEmail(String email);   
}
