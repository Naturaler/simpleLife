## linux系统 安装mysql8.0教程
1. 安装mysql8.0
   1. ubuntu20.04安装mysql
      1. 安装命令
   ```shell
   sudo apt update
   sudo apt install mysql-server
   ```
      2. 查看服务状态
      ```shell
      sudo systemctl status mysql
      ```
   2. centos stream8 安装mysql8.0
      https://cloud.tencent.com/developer/article/1626795
      ```
      sudo dnf install @mysql
      sudo systemctl enable --now mysqld
      sudo systemctl status mysqld
      ```
      安装完成后，进行密码等设置：
      ```
      sudo mysql_secure_installation
      ```
      设置完成后，连接数据库
      ```
      mysql -u root -p
      ```
   
3. 重置root密码
   1. 停止mysql服务
   ```shell
   sudo service mysql stop
   ```
   2. 修改my.conf文件
   ```shell
   sudo vim /etc/mysql/my.conf
   ```
   在最下面补充以下2句：
    ```
   [mysqld]
   skip-grant-tables
   ```
   保存，退出编辑
   3. 重启mysql服务
   ```shell
   sudo service mysql restart
   ```
   4. 登录mysql
   ```shell
   mysql
   ```
   清空密码，更新密码验证方式
   ```mysql
   use mysql;
   update user set authentication_string = '' where user = 'root';
   update user set plugin = 'mysql_native_password' where user = 'root'; 
   ```
   mysql8.0默认使用了caching_sha2_password的登录验证方式
   可以通过以下脚本查看登录验证方式：
   ```mysql
   select host,user,plugin,authentication_string from mysql.user;
   ```
   5. 注释掉my.conf的改动
   ```shell
   sudo vim /etc/mysql/my.conf
   ```
   6. 重启mysql服务
   ```shell
   sudo service mysql restart
   ```
   7. 设置新密码
   ```mysql
   alter user 'root'@'localhost' identified by '#{passowrd}';
   flush privileges;
   ```
   8. 登录验证
   ```shell
   mysql -u root -p '#{password}'
   ```
4. 创建新库和新用户
   1. 创建数据库
   ```mysql
   create database demo;
   ```
   2. 选择新建的数据库
   ```mysql
   use demo;
   ```
   3. 创建新用户
   ```mysql
   create user 'demo_user'@'%' identified by 'Demo_user_anyhost@188';
   ```
   4. 用户授权
   ```mysql
   grant all privileges on demo.* to 'demo_user'@'%';
   flush privileges;
   ```
   查看用户权限
   ```mysql
   show grants for demo_user;
   ```

https://blog.csdn.net/yudian1991/article/details/106760222