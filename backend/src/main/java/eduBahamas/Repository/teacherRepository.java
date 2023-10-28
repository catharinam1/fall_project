package eduBahamas.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import eduBahamas.Models.Collections.teacher;

public interface teacherRepository extends MongoRepository<teacher, String> {
    public Optional<teacher> findTeacherByEmail(String email);
}
