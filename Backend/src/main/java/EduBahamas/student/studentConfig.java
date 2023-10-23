package EduBahamas.student;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class studentConfig {

    @Bean
    CommandLineRunner commandLineRunner(studentRepository repository){
        return args -> {
            student keonte = new student("keonte", "keonte@gmail.com", LocalDate.of(2000, 5, 15));
            student nikki = new student("nikki", "nikki@gmail.com", LocalDate.of(2002, 3, 3));

            repository.saveAll(List.of(keonte, nikki));
        };
    }
}
