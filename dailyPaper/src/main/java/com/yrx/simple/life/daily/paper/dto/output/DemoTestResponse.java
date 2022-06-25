package com.yrx.simple.life.daily.paper.dto.output;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * Created by r.x on 2022/6/25.
 */
@Data
public class DemoTestResponse {
    private Integer id;
    private String name;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createTime;
}
