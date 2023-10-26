package EduBahamas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin; // Import the CrossOrigin annotation
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import EduBahamas.model.requestBody.registerRequest;
import EduBahamas.service.registrationService;

@RestController
@RequestMapping(path="api/v1/register")
@CrossOrigin // Enable CORS for this controller
public class registrationController {
    private final registrationService registrationService;

    @Autowired
    public registrationController(registrationService registrationService){
        this.registrationService = registrationService;
    }

    @PostMapping
    public Object registerUser(@RequestBody registerRequest registerRequest){
        return registrationService.registerUser(registerRequest);
    }
}
