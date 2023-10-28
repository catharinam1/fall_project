package eduBahamas.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import eduBahamas.Models.Collections.question;
import eduBahamas.Service.questionService;

@RestController
@RequestMapping(path = "api/v1/question")
@CrossOrigin
public class questionController {
    private final questionService questionService;

    @Autowired
    public questionController(questionService questionService){
        this.questionService = questionService;
    }

    @GetMapping
    public List<question> getAllQuestions(){
        return questionService.getAllQuestions();
    }
}
