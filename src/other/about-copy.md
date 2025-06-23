# 涉及 Copy 原理部分分析
自 2024 下半部年与某些人切割后，某些人仍然不遵守规范与守则，由某位提供的压缩包，本文对对隔壁框架开发关于 PBHook 抄袭部分认定

文件来源：某群友(某框架群内转发)

文件原始内容：https://share.weiyun.com/vqlePMqd

## 第一部分 确定程序开发栈
首先我们对使用 ida pro 拖入 转到字符串视图 发现大量关于 py 的字样

我们推测其基于 python+nuikta/pyinstaller 构建的 onefile 搜索 pyinstaller 关键词 确认是 pyinstaller

## 第二部分 使用 pyinstxtractor 工具解压内部文件
使用 https://github.com/extremecoders-re/pyinstxtractor/blob/master/pyinstxtractor.py

解压后文件包括 js hook_server 两部分均被混淆 技术栈为 frida + websockets

## 第三步部分 对JS部分代码抄袭部分确认

```javascript
const MODULE_NAME = 'wrapper.node';
function hexDump(_0x56ac13) {
    const _0x481bdb = Array['from'](new Uint8Array(_0x56ac13))['map'](_0x156c80 => _0x156c80['toString'](0x10)['padStart'](0x2, '0'))['join']('');
    return _0x481bdb;
}
function readUTF8Str(_0x4c1e14) {
    let _0x481cae = '';
    if ((_0x4c1e14['readU8']() & 0x1) === 0x0)
        _0x481cae = _0x4c1e14['add'](0x1)['readUtf8String']();
    else {
        const _0x146a47 = _0x4c1e14['add'](0x10)['readPointer'](), _0x27773f = _0x4c1e14['add'](0x8)['readU64']();
        try {
            _0x481cae = _0x146a47['readUtf8String'](_0x27773f);
        } catch (_0x56eda0) {
            _0x481cae = '';
        }
    }
    return _0x481cae;
}
function writeCPPString(_0x3764e7, _0x484599) {
    _0x3764e7['add'](0x8)['writeU32'](_0x484599['length']), _0x3764e7['add'](0x10)['readPointer']()['writeUtf8String'](_0x484599);
}
function main() {
    const _0x117541 = Module['findBaseAddress'](MODULE_NAME);
    if (!_0x117541)
        return setTimeout(main, 0x1);
    function _0x1999ec() {
        const _0x49b89d = 0x1cfac38, _0x432c82 = _0x117541['add'](_0x49b89d), _0x482d6f = new NativeFunction(_0x432c82, 'int', [
                'pointer',
                'pointer'
            ]);
        Interceptor['replace'](_0x432c82, new NativeCallback((_0x378c8a, _0x276455) => {
            try {
                const _0x4abd43 = _0x276455['readPointer'](), _0x409db3 = _0x4abd43['readPointer'](), _0x5a1e79 = _0x4abd43['readPointer']()['add'](0x20)['readPointer'](), _0x5efd68 = _0x5a1e79['readPointer'](), _0x1691a1 = _0x5efd68, _0x2076b0 = _0x5a1e79['add'](0x8)['readU64']();
                let _0x15862d = _0x2076b0 - _0x1691a1, _0x263d55 = readUTF8Str(_0x409db3);
                console['log']('cmd:\x20' + _0x263d55);
                const _0x1e76e7 = _0x4abd43['add'](0x8 * 0x8)['readU64']();
                let _0x2123bc = !![];
                _0x263d55 === 'trpc.o3.report.Report.SsoReport' && (send({
                    'type': 'process_send_pb',
                    'cmd': _0x263d55,
                    'seq': _0x1e76e7,
                    'pb': _0x47dde2
                }), recv('process_send_pb_response_' + _0x1e76e7, _0x3436f3 => {
                    let _0x5aea67 = _0x3436f3['payload']['pb'];
                    if (_0x5aea67['length'] === 0x0) {
                        _0x2123bc = ![];
                        return;
                    }
                    const _0x41ef77 = _0x5aea67['length'] / 0x2, _0x22cf42 = Memory['alloc'](_0x41ef77);
                    Memory['writeByteArray'](_0x22cf42, _0x5aea67['match'](/../g)['map'](_0xd57414 => parseInt(_0xd57414, 0x10))), Memory['copy'](_0x5efd68, _0x22cf42, _0x41ef77), _0x5a1e79['add'](0x8)['writePointer'](_0x5efd68['add'](_0x41ef77));
                })['wait'](0x1388));
                if (_0x263d55 === 'OidbSvcTrpcTcp.0xED3_1') {
                }
                const _0x47dde2 = hexDump(_0x5efd68['readByteArray'](_0x15862d));
                return _0x263d55 = readUTF8Str(_0x409db3), console['log']('cmd:\x20' + _0x263d55 + '\x0apb:\x20' + _0x47dde2), _0x2123bc ? _0x482d6f(_0x378c8a, _0x276455) : 0x0;
            } catch (_0x6c1c1d) {
                return console['error'](_0x6c1c1d), _0x482d6f(_0x378c8a, _0x276455);
            }
        }, 'int', [
            'pointer',
            'pointer'
        ]));
    }
    function _0x4ed2f3() {
        const _0x1d1f65 = 0x1cfd038, _0x24d9af = _0x117541['add'](_0x1d1f65);
        Interceptor['attach'](_0x24d9af, {
            'onEnter'(_0x2817bd) {
                const _0x392919 = _0x2817bd[0x0], _0xe366ce = _0x2817bd[0x1], _0x37e865 = _0x2817bd[0x2], _0x4fad83 = _0xe366ce['readPointer'](), _0xeb9819 = _0x4fad83['add'](0x18)['readU64'](), _0x3b041f = _0x4fad83['add'](0x20), _0x14325e = readUTF8Str(_0x3b041f), _0x7f2763 = _0x4fad83['add'](0x38)['readPointer'](), _0x1e5e20 = _0x7f2763['add'](0x8)['readU64']() - _0x7f2763['readPointer'](), _0x4e0e70 = _0x7f2763['readPointer']()['readByteArray'](_0x1e5e20), _0xf82460 = hexDump(_0x4e0e70);
                console['log']('\x0a|-\x20Receive\x20packet,\x20' + new Date() + '\x0a|-\x20cmd:\x20' + _0x14325e + '\x0a|-\x20seq:\x20' + _0xeb9819 + '\x0a|-\x20protobuf:\x20' + _0xf82460 + '\x0a|-\x20err:\x20' + _0x37e865 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
            }
        });
    }
    _0x1999ec(), _0x4ed2f3();
}
main();
```
样本下载: https://share.weiyun.com/n5yKimjk

原始 napcat 方代码

```javascript
let cmd = Memory.readPointer(args[1]).add(32);
let cmd_type = new Uint8Array(cmd.readByteArray(1))[0] & 0x1;
let seq = Memory.readPointer(args[1]).add(24);
let uin = Memory.readPointer(args[1]);
let uin_type = new Uint8Array(uin.readByteArray(1))[0] & 0x1;
let bufferPtr = Memory.readPointer(Memory.readPointer(args[1]).add(56));
let buffer_start = Memory.readPointer(bufferPtr);
let buffer_end = Memory.readPointer(bufferPtr.add(8));
let buffer_len = buffer_end - buffer_start;
```

对比后发现 buffer_len 对应 _0x15862d = _0x2076b0 - _0x1691a1之类高度一致

其 Hook 点与 NapCat 一致 一般来说函数有很多层 很多位置 但选择同样位置的情况很少

等等其余代码不再做对比 napcat 最早提交时间与 2024 年 10 月

## 第四部分 补充
以下是时间与代码证据 有必要该仓库可以 public

![napcat](/data/QQ_1744604365564.png)
![napcat](/data/ef69a9b3-c406-43dd-a43f-4a8cc42896f9.png)

```
napcat 原始仓库 暂未 public 但是你仍可以通过反编译 moehoo 获得 napcat 逻辑 napcat 自 3.6.0 版本已内置 native 能力的 Hook 库 可通过 x64dbg ida pro 自行验证 hook 点与逻辑

https://github.com/NapNeko/napcat.packet/blob/main/napcat.packet.old.py
https://github.com/NapNeko/napcat.packet/blob/main/napcat.packet.py
```
