package com.zebra;

import com.zebra.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class ZebraApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZebraApplication.class, args);
	}
}
