package com.yrx.simple.life.daily.paper.dto.input;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * Created by r.x on 2022/6/25.
 */
@Data
public class DemoTestRequest {
    private String name;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createTime;
}
