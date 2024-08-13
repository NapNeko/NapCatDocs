# BootWay05 撸猫教程

BootWay05 仅支持 Windows 64 位系统，需要确保你的电脑上安装 & 启用了 PowerShell，一般 Windows 10 / 11 系统是默认启用的。检测 PowerShell 是否存在可以通过在开始菜单中搜索，或在任何一个终端中输入 `powershell`，若成功启动 PowerShell 则存在。若不存在，请自行搜索教程配置。

## 自动脚本安装
```
curl -o install.ps1 https://cdn.jsdmirror.com/gh/NapNeko/NapCat-Installer@main/script/install.ps1
powershell -ExecutionPolicy ByPass -File ./install.ps1 -verb runas
```
1. 点击复制上面代码，如下图。
  ![复制代码](../../../../asset/img/getting-started/nc070.png)

2. 打开一个你想安装猫猫框架的目录（随便啦，但是一般别在 C 盘，笨蛋）

3. 在空白处右键，点击在终端打开。若无此选项卡，可以在地址栏中输入 wt 并回车。
  ![alt text](../../../../asset/img/getting-started/nc056.png)
  ![alt text](../../../../asset/img/getting-started/nc057.png)

4. 在终端中右键（不要用 Ctrl+V - 这样有可能造成不可预料的后果！），将刚刚的复制的代码粘贴进终端。如果终端有警告，点击仍然粘贴。
  ![alt text](../../../../asset/img/getting-started/nc059.png)

5. 如果代码没动就回车一下，等到提示框弹出。

## 手动安装

下载 NapCat Shell 本体和 QQ，并安装 QQ。如果在执行这个教程上有困难，可以参考上面的自动脚本。

1. 首先找到你下载的 NC 目录内的文件 `dbghelp.dll`： 
![alt text](../../../../asset/img/getting-started/nc051.png)

2. 点击复制，完成后不要关闭文件管理窗口，否则会影响剪贴板。
![alt text](../../../../asset/img/getting-started/nc054.png)

3. 进入 QQ 的安装位置。一般在系统盘下的 `Program Files\Tencent\QQNT`，或者也可以在开始菜单或 Windows 的快速搜索中找到 QQ 然后点击打开文件位置。
![alt text](../../../../asset/img/getting-started/nc052.png)
![alt text](../../../../asset/img/getting-started/nc053.png)

4. 点击粘贴，覆盖原有的 `dbghelp.dll`。
![alt text](../../../../asset/img/getting-started/nc055.png)

5. 启动一个工作目录在 NC 目录的终端。具体来说，回到 NC 目录，按照自动脚本安装部分的第 3 步操作。

6. 来到弹出的黑色窗口输入或粘贴
```
powershell -ExecutionPolicy ByPass -File ./BootWay05.ps1
```
并回车。

## 如何再次启动？

再次运行只需要手动启动 PowerShell 脚本即可，如下图：
![alt text](../../../../asset/img/getting-started/nc071.png)
