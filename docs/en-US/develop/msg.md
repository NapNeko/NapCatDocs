# Message Format Support

| Message Format            | Receive | Send  |                               Remarks                               |
| ------------------------- | :-----: | :---: | :-----------------------------------------------------------------: |
| CQ Code                   |    ✅    |   ✅   |                                                                     |
| Text                      |    ✅    |   ✅   |                                                                     |
| Emoji                     |    ✅    |   ✅   |                                                                     |
| Rock-Paper-Scissors Emoji |    ✅    |   ✅   |                                                                     |
| Dice Emoji                |    ✅    |   ✅   |                                                                     |
| Store Emoji               |    ✅    |   ✅   |                                                                     |
| Markdown                  |    ✅    |   ❌   |     {type: "markdown", data: {data: "`**Markdown content**`"}}      |
| Image                     |    ✅    |   ✅   |                                                                     |
| Poke a Friend             |    ✅    |   ❌   |                                                                     |
| Poke in Group             |    ✅    |   ❌   |                                                                     |
| Quote Message             |    ✅    |   ✅   |                                                                     |
| @Group Members            |    ✅    |   ✅   |                                                                     |
| Voice Message             |    ✅    |   ✅   |   Supports various audio formats like mp3, wav for direct sending   |
| JSON Message              |    ✅    |   ✅   |               Sending requires manually signed token                |
| Forwarded Message Record  |    ✅    |   ✅   |                        **Cannot be forged**                         |
| Video                     |    ✅    |   ✅   |                                                                     |
| File                      |    ✅    |   ✅   | Can specify `name` parameter for custom file name, see extended API |
| Music Card                |    ✅    |   ✅   |             Requires configuration of signature server              |
| Red Packet                |    ❌    |   ❌   |                         No plans to support                         |
| XML                       |    ❌    |   ❌   |                         No plans to support                         |
