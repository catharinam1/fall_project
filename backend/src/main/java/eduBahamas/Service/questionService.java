package eduBahamas.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eduBahamas.Models.Collections.question;
import eduBahamas.Repository.questionRepository;

@Service
public class questionService {
    private final questionRepository questionRepository;

    @Autowired
    public questionService(questionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    public List<question> getAllQuestions(){
        return questionRepository.findAll();
    }
}
