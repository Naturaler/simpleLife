package com.yrx.simple.life.daily.paper.mapper;

import com.yrx.simple.life.daily.paper.po.DemoTest;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by r.x on 2022/6/25.
 */
@Mapper
public interface DemoTestMapper {
    List<DemoTest> list();

    void insert(DemoTest demoTest);
}
