package eduBahamas.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import eduBahamas.Models.Collections.student;

public interface studentRepository extends MongoRepository<student, String> {
    public Optional<student> findStudentByEmail(String email);
}
