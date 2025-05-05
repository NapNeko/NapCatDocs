# 防撤回寻找与思考✨

## 第一步 找找线索🔍

打开IDA Pro把wrapper.node丢进去，先去吃个饭吧，饿死了
回来后打开string view看看
根据经验，撤回的英文嘛，要么是recall要么是revoke呢。
字符串里有"do"之类的不是下发通知，是客户端主动发送撤回请求哦。
其中相关的包括上面的trpc什么什么的(了解协议的小伙伴应该知道)
![recall](/assets/recall/1.png)
"on grp recall"和"on c2c recall"，这个看起来超级可疑的

## 第二步 验证思路💭

于是呢，我们找到xref "on grp recall"，跳到目标函数
![recall](/assets/recall/2.png)

然后对这部分打个断点，发现撤回的时候果然触发了这部分代码！

![recall](/assets/recall/3.png)

所以确定啦，这就是撤回处理部分

## 第三步 破坏逻辑🔨

撤回逻辑很简单嘛，肯定包括删除数据库、中断图片文件请求、回收一切相关的东西呀。
为了阻止这些发生，我们要让recall逻辑走错路线，比如让它判断不出这是recall，或者给它错误的内存数据
![recall](/assets/recall/4.png)
我选了两处地方，第一处把jnbe改成jbe(我实验的这个)，第二处也是同理

让逻辑反过来，同时保持字节数一致，这样就完成反撤回消息

## 思考之后🤔

但是有个问题，如果这样破坏了recall逻辑，我怎么知道谁撤回了消息呀？我也想区分哪条撤回了

这里有两个方案可以选择呢：

1. 手动解协议方案💟
   根据经验，撤回的sysmsg可以通过ipc拿到协议包，或者像napcat一样注册listener直接获取sysmsg协议包。
   解完协议后，可以调用QQ自己的api去获取撤回消息（因为我们阻止了删除数据库）。
   如果想要通知，可以调用msgService的addLocalGrayTip添加小灰条提示
   当然也可以对前端随便加，爱怎么改就怎么改

2. node native模块方案💕
   可以写成node native模块，提取撤回的结构体数据。
   启动时注册一个js callback，撤回时native调用callback就能拿到相关结构
   然后就和上面一样了

3. 动态模块/patch方案💝
   写成这个后拦截这部分，需要从外部获取msgService（通过napi操作和Hook操作）。
   获取到msgService后直接调用它的addLocalGrayTip，就可以添加小灰条通知