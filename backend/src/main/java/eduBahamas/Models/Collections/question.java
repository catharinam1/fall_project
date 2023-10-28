package eduBahamas.Models.Collections;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import eduBahamas.Models.option;
import lombok.Data;

@Data
@Document
public class question {
    @Id
    private String id;

    private String questionText;
    private String exam;
    private int year;
    private String questionType;
    private String subject;
    private List<option> options;

    public question(){}

    public question(String questionText, String exam, String questionType, int year, List<option> options, String subject){
        this.questionText = questionText;
        this.exam = exam;
        this.questionType = questionType;
        this.year = year;
        this.options = options;
        this.subject = subject;
    }

    public String getId(){
        return id;
    }

    public String getQuestionText(){
        return questionText;
    }

    public String getQuestionType(){
        return questionType;
    }

    public String getexam(){
        return exam;
    } 

    public int getYear(){
        return year;
    }
    public void setYear(int year){
        this.year = year;
    }

    public List<option> getOptions(){
        return options;
    }
    
    public String getSubject(){
        return subject;
    }

}
