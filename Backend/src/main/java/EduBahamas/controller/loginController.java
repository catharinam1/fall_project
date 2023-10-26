package EduBahamas.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import EduBahamas.model.student;
import EduBahamas.model.requestBody.userLogin;
import EduBahamas.service.loginService;

@RestController
@RequestMapping(path="api/v1/login")

@CrossOrigin
public class loginController {
    private final loginService loginService;

    public loginController(loginService loginService){
        this.loginService = loginService;
    }

    @PostMapping
    public Object loginUser(@RequestBody userLogin userLogin){
        return loginService.validateUser(userLogin);
    }

    @GetMapping
    public List<student> testLogin(){
        return loginService.testLogin();
    }
}
