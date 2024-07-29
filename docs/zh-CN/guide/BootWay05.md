# 安装
## 首次启动？
1.首先找到你下载的NC目录内的这个文件 
![alt text](../../asset/img/getting-started/nc051.png)
2.然后点击复制 完成后不要关闭文件管理窗口
![alt text](../../asset/img/getting-started/nc054.png)
3.点击Win的菜单 输入框输入QQ 然后打开文件位置
![alt text](../../asset/img/getting-started/nc052.png)
4.再次右键打开文件位置 到达到QQ目录
![alt text](../../asset/img/getting-started/nc053.png)
5.点击粘贴 如果提升是否覆盖 点击确认
![alt text](../../asset/img/getting-started/nc055.png)
6.这个时候回到NC目录 空白处右键点击如下图的按钮
![alt text](../../asset/img/getting-started/nc056.png)
7.如果上面这部不会 在地址栏输入wt回车也可以参考下图
![alt text](../../asset/img/getting-started/nc057.png)
8.完成后 来到弹出的黑色窗口输入
```
powershell -ExecutionPolicy ByPass -File ./BootWay05.ps1 -verb runas
```
如果乱码叉掉窗口从第6步或者第7步重来
```
powershell -ExecutionPolicy ByPass -File ./BootWay05-utf8.ps1 -verb runas
```
记得回车哦

## 如何再次启动？
仅进行上面的6-8步

# 如果我是说如果教程没有看懂 应该如何处理?
这个时候不要慌张 多读多学