1. 查看git用户和邮箱
```
git config user.name
git config user.email
```

2. 设置/修改git用户名和邮箱
```
git config --global user.name "username"
git config --global user.email "email"
```

## git添加ssh key
1. 设置git账号
```
git config --global user.name "Your Name"
git config --global user.email “you@example.com”
```
2. 生成ssh key
```
ssh-keygen
```
3. 添加public key到git配置
```
cat id_rsa.pub
```

https://medium.com/devops-with-valentine/2021-how-to-set-up-your-ssh-key-for-github-on-windows-10-afe6e729a3c0