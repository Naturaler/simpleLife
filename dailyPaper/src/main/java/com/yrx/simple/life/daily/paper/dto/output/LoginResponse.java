package com.yrx.simple.life.daily.paper.dto.output;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by r.x on 2022/6/28.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String user;
    private String info;
}
