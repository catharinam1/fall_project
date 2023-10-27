package EduBahamas.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "option_sequence", sequenceName = "option_sequence", allocationSize = 1)
    private Long optionId;

    @JsonIgnore
    private Long questionId;
    
    private String optionText;
    public Boolean correct;

    public Option(){}

    public Option(Long optionId, Long questionId, String optionText, Boolean correct){
        this.optionId = optionId;
        this.questionId = questionId;
        this.optionText = optionText;
        this.correct = correct;
    }

    public Option(Long questionId, String optionText, Boolean correct){
        this.questionId = questionId;
        this.optionText = optionText;
        this.correct = correct;
    }

    public Long getOptionId(){
        return optionId;
    }
    public Long getQuestionId(){
        return questionId;
    }
    public String getQuestionText(){
        return optionText;
    }
    public Boolean getCorrect(){
        return correct;
    }

    
}
