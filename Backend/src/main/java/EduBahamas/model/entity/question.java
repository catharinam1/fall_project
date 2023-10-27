package EduBahamas.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "question_sequence", sequenceName = "question_sequence", allocationSize = 1)
    @Column(name = "questionid")
    private Long questionid;

    @Column(name = "questiontext")
    private String questiontext;

    @Column(name = "examid")
    private Long examid;

    @Column(name = "questiontype")
    private String questiontype;

    public question(){}

    public question(String questiontext, Long examid, String questiontype){
        this.questiontext = questiontext;
        this.examid = examid;
        this.questiontype = questiontype;
    }

    public String getQuestionText(){
        return questiontext;
    }

    public Long getQuestionId(){
        return questionid;
    }

    public String getQuestionType(){
        return questiontype;
    }

    public Long getExamId(){
        return examid;
    }
    public String toString(){
        return "Question{" +
                "text=" + getQuestionText() +
                ", type='" + getQuestionType() + '\'' +
                ", id='" + getQuestionId() +
                '}';
    }
}
