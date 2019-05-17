# pm2-demo
pm2 demo

##1. 在服务器和本地创建密钥
### 先在本地创建 ssh key
```
 ssh-keygen -t rsa -b 4096 -C "邮箱地址"
 然后不需要输入密码,直接回车回车(否则会很麻烦)
 检查 cd ~ 账户下 ~/.ssh文件夹下是否多了3个文件
   ~/.ssh/id_rsa             私钥
   ~/.ssh/id_rsa.pub         公钥
   ~/.ssh/know_hosts    主机记录,第一次登陆之后主机信息,当你敲yes之后会被记录到这个文件
```

### 将ssh key 加入代理
```
eval $(ssh-agent -s)     启动 ssh-agent
ssh-add ~/.ssh/id_rsa  将私钥加入代理中
```

### 将公钥添加到github上
```
使用 cat ~/.ssh/id_rsa.pub   查看并复制公钥
登陆你的github账户>头像下找到setttings > SSH >粘贴
```

### 测试下是否配置成功
```
ssh -T git@github.com
好了已经打通了,本地与GitHub之间的无密码登录了
```

### 服务器端和本地样
```
1.最关键的一步就是需要在服务器上新建一个填写public key的文件
vim ~/.ssh/authorized_keys
2.然后使用 cat ~/.ssh/id_rsa.pub 复制本地的public key 粘贴进去
```

2. 安装node.js pm2
3. 在github上建立仓库
4. 使用密钥配置服务器,本地,github三者无密码登录
5. 配置pm2 的部署配置文件

pm2 deploy ecosystem.config.js production setup
