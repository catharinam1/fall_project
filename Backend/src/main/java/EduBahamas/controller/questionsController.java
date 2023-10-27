package EduBahamas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import EduBahamas.model.entity.Option;
import EduBahamas.model.entity.question;
import EduBahamas.model.responseBody.questionResponse;
import EduBahamas.service.questionsService;

@RestController
@RequestMapping(path="api/v1/questions")
public class questionsController {
    private final questionsService questionsService;

    @Autowired
    public questionsController(questionsService questionsService){
        this.questionsService = questionsService;
    }

    @GetMapping
    public List<questionResponse> getQuestions(){
        return questionsService.getQuestions();
    }
}
