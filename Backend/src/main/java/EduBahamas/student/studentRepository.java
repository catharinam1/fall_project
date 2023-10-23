package EduBahamas.student;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface studentRepository extends JpaRepository<student, Long> {

    //@Query("SELECT s FROM student s where s.email = ?1")
    Optional<student> findStudentByEmail(String email);
}
