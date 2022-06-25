package com.yrx.simple.life.daily.paper.service;

import com.yrx.simple.life.daily.paper.po.DemoTest;

import java.util.List;

/**
 * Created by r.x on 2022/6/25.
 */
public interface DemoService {
    List<DemoTest> list();

    void add(DemoTest demoTest);
}
