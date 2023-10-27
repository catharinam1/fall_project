package EduBahamas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import EduBahamas.model.entity.Option;

public interface optionRepository extends JpaRepository<Option, Long>{
    public List<Option> findByQuestionId(Long questionId);
}
