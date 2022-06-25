package com.yrx.simple.life.daily.paper.api;

import com.yrx.simple.life.daily.paper.dto.input.DemoTestRequest;
import com.yrx.simple.life.daily.paper.dto.output.DemoTestResponse;
import com.yrx.simple.life.daily.paper.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by r.x on 2022/6/25.
 */
@RestController
@RequestMapping("/demo")
public class DemoApi {
    @Autowired
    private DemoService demoService;

    @GetMapping("list")
    public List<DemoTestResponse> list() {
        return demoService.list();
    }

    @PostMapping("add")
    public List<DemoTestResponse> add(@RequestBody DemoTestRequest demoTest) {
        demoService.add(demoTest);
        return demoService.list();
    }
}
