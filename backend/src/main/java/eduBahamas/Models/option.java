package eduBahamas.Models;

public class option {
    private Long optionId;
    private Boolean correct;
    private String questionText;

    public option(Long optionId, Boolean correct, String questionText){
        this.optionId = optionId;
        this.correct = correct;
        this.questionText = questionText;
    }

    public Long getOptionId(){
        return optionId;
    }

    public Boolean getCorrect(){
        return correct;
    }

    public String getQuestionText(){
        return questionText;
    }
}
