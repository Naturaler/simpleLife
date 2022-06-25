package com.yrx.simple.life.daily.paper.converter;

import com.yrx.simple.life.daily.paper.dto.input.DemoTestRequest;
import com.yrx.simple.life.daily.paper.dto.output.DemoTestResponse;
import com.yrx.simple.life.daily.paper.po.DemoTest;
import org.mapstruct.Mapper;

import java.util.List;

/**
 * Created by r.x on 2022/6/25.
 */
@Mapper(componentModel = "spring")
public interface DemoConverter {
    DemoTest reqToPo(DemoTestRequest request);

    DemoTestResponse poToRes(DemoTest po);

    List<DemoTestResponse> poToRes(List<DemoTest> po);
}
