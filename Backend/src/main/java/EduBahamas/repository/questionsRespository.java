package EduBahamas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import EduBahamas.model.questions;

@Repository
public interface questionsRespository extends JpaRepository<questions, Long> {
    
}
