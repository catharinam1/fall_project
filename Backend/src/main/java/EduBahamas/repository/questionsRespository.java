package EduBahamas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import EduBahamas.model.entity.question;

@Repository
public interface questionsRespository extends JpaRepository<question, Long> {
    
}
