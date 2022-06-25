-- 建表脚本
create table demo_test
(
    id          integer     not null auto_increment comment '主键',
    name        varchar(64) not null comment '名称',
    create_time date        not null comment '创建时间',
    constraint pk_demo_test
        primary key (id)
);

