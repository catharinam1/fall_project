package eduBahamas.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import eduBahamas.Models.Collections.question;

public interface questionRepository extends MongoRepository<question, String> {

    
}
