package com.yrx.simple.life.daily.paper.api;

import com.yrx.simple.life.daily.paper.dto.input.UserLoginDTO;
import com.yrx.simple.life.daily.paper.dto.output.LoginResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * Created by r.x on 2022/6/27.
 */
@RestController
@RequestMapping("/login")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class LoginApi {

    @PostMapping
    public LoginResponse login(@RequestBody UserLoginDTO loginDTO) {
        log.info("login dto: {}", loginDTO);
        return new LoginResponse(loginDTO.getPhone(), "hello world");
    }
}
