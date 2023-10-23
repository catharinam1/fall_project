package EduBahamas.questions;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/v1/questions")
public class questionsController {
    private final questionsService questionsService;

    @Autowired
    public questionsController(questionsService questionsService){
        this.questionsService = questionsService;
    }

    @GetMapping
    public List<questions> getQuestions(){
        return questionsService.getQuestions();
    }
}
