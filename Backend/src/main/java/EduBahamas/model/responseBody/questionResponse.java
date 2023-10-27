package EduBahamas.model.responseBody;

import java.util.List;

import EduBahamas.model.entity.Option;

public class questionResponse {

    private Long id;
    private String questionText;
    private String questionType;
    List<Option> options;

    public questionResponse(Long id, String questionText, String questionType){
        this.id = id;
        this.questionText = questionText;
        this.questionType = questionType;
    }

    public Long getId(){
        return id;
    }
    public String getQuestionText(){
        return questionText;
    }
    public String getQuestionType(){
        return questionType;
    }
    public List<Option> getOptions(){
        return options;
    }
    public void setOptions(List<Option> options){
        this.options = options;
    }
}
