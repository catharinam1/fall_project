package EduBahamas.login;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import EduBahamas.student.student;
import EduBahamas.student.studentLogin;

@RestController
@RequestMapping(path="api/v1/login")
public class loginController {
    private final loginService loginService;

    public loginController(loginService loginService){
        this.loginService = loginService;
    }

    @PostMapping
    public Object loginUser(@RequestBody studentLogin studentLogin){
        return loginService.validateUser(studentLogin);
    }

    @GetMapping
    public List<student> testLogin(){
        return loginService.testLogin();
    }
}
