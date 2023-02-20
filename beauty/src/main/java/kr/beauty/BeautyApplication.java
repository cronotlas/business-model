package kr.beauty;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"kr.beauty.*"})
@MapperScan("kr.beauty.*")
public class BeautyApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeautyApplication.class, args);
	}

}
