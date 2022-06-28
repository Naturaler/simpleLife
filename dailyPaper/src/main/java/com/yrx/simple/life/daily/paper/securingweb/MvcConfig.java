package com.yrx.simple.life.daily.paper.securingweb;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    public void addViewControllers(ViewControllerRegistry registry) {
        String[] viewNames = {"home", "hello", "login"};
        registry.addViewController("/").setViewName("home");
        for(String viewName : viewNames ) {
            registry.addViewController("/" + viewName).setViewName(viewName);
        }
    }
}
