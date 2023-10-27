package EduBahamas.service;

import java.util.ArrayList;
import java.util.List;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import EduBahamas.model.entity.Option;
import EduBahamas.model.entity.question;
import EduBahamas.model.responseBody.questionResponse;
import EduBahamas.repository.optionRepository;
import EduBahamas.repository.questionsRespository;

@Service
public class questionsService {
    private final questionsRespository questionsRespository;
    private final optionRepository optionRepository;

    @Autowired
    public questionsService(questionsRespository questionsRespository, optionRepository optionRepository){
        this.questionsRespository = questionsRespository;
        this.optionRepository = optionRepository;
    }

    public List<questionResponse> getQuestions(){
        List<question> question = questionsRespository.findAll();

        List<questionResponse> response = new ArrayList<>();

        for(int i = 0; i < question.size(); i++){
            question q = question.get(i);
            questionResponse temp = new questionResponse(q.getQuestionId(), q.getQuestionText(), q.getQuestionType());
            temp.setOptions(optionRepository.findByQuestionId(q.getQuestionId()));
            response.add(temp);
        }

        return response;
    }

    public List<Option> getOptions(Long questionId){
       return optionRepository.findByQuestionId(questionId);
    }
}
