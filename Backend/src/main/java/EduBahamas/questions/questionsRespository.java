package EduBahamas.questions;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface questionsRespository extends JpaRepository<questions, Long> {
    
}
