package com.yrx.simple.life.daily.paper.service.impl;

import com.yrx.simple.life.daily.paper.mapper.DemoTestMapper;
import com.yrx.simple.life.daily.paper.po.DemoTest;
import com.yrx.simple.life.daily.paper.service.DemoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by r.x on 2022/6/25.
 */
@Service
@Slf4j
public class DemoServiceImpl implements DemoService {
    @Autowired
    private DemoTestMapper demoTestMapper;

    @Override
    public List<DemoTest> list() {
        List<DemoTest> list = demoTestMapper.list();
        log.info("list demo data: {}", list);
        return list;
    }

    @Override
    public void add(DemoTest demoTest) {
        log.info("add demoTest: {}", demoTest);
        demoTestMapper.insert(demoTest);
    }
}
