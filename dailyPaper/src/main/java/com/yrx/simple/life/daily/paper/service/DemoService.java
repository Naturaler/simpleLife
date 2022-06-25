package com.yrx.simple.life.daily.paper.service;

import com.yrx.simple.life.daily.paper.dto.input.DemoTestRequest;
import com.yrx.simple.life.daily.paper.dto.output.DemoTestResponse;

import java.util.List;

/**
 * Created by r.x on 2022/6/25.
 */
public interface DemoService {
    List<DemoTestResponse> list();

    void add(DemoTestRequest request);
}
