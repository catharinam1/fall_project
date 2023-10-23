package EduBahamas.questions;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class questions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "questionid")
    private Long questionid;

    @Column(name = "questiontext")
    private String questiontext;

    @Column(name = "examid")
    private Long examid;

    @Column(name = "questiontype")
    private String questiontype;

    @Column(name = "correctanswer")
    private String correctanswer;

    public questions(){}

    public questions(String questiontext, Long examid, String correctanswer, Long questionId, String questiontype){
        this.questiontext = questiontext;
        this.examid = examid;
        this.correctanswer = correctanswer;
        this.questionid = questionId;
        this.questiontype = questiontype;
    }

    public String getQuestionText(){
        return questiontext;
    }

    public String getCorrectAnswer(){
        return correctanswer;
    }

    public Long getQuestionId(){
        return questionid;
    }

    public String getQuestionType(){
        return questiontype;
    }

    public String toString(){
        return "Question{" +
                "text=" + getQuestionText() +
                ", answer='" + getCorrectAnswer() + '\'' +
                ", typer='" + getQuestionType() + '\'' +
                ", id='" + getQuestionId() +
                '}';
    }
}
