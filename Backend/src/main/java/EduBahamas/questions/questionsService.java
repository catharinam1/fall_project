package EduBahamas.questions;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class questionsService {
    private final questionsRespository questionsRespository;

    @Autowired
    public questionsService(questionsRespository questionsRespository){
        this.questionsRespository = questionsRespository;
    }

    public List<questions> getQuestions(){
        return questionsRespository.findAll();
    }

}
