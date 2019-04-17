字符串
===

使用格式模板构造字符串
---

'{"word":"%s","sentence":"%s %s %s"}' % (v.get("keyword"),v.get("vt"),v.get("sound"),v.get("desc"))

将字符串拆成3份
---

'111111111aa222222222aa333333333aa'.partition('aa')
输出 ('111111111', 'aa', '222222222aa333333333aa')

查找子串
---

```python
>>> '0123aa6aa9'.find('aa')
4
>>> '0123aa6aa9'.find('bb')
-1
>>> '0123aa6aa9'.index('aa')
4
>>> '0123aa6aa9'.index('bb')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: substring not found
>>> '0123aa6aa9'.find('aa',5)
7
>>> '0123aa6aa9'.find('aa',-1)
-1
>>>
```

截取子串
---

```python
>>> '0123456789'[3:6]
'345'
>>> '0123456789'[3:]
'3456789'
>>> '0123456789'[:6]
'012345'
>>>
```

替换
---

```python
>>> '111aa111'.replace('aa','bb')
'111bb111'
>>> import re
>>> re.compile(r"</?b>").sub("","<b>foo</b>")
'foo'
>>>
```

列表、集合、数组
===

二维打散成一维
---

``` python 
>>> import operator
>>> from functools import reduce
>>> reduce(operator.add, [[1,2,3],[4,5],[6,7,8]])
[1, 2, 3, 4, 5, 6, 7, 8]
```

转换映射（map操作）
---

``` python
>>> mm = map(lambda v: v+1, [1,2,3])
>>> mm
<map object at 0x000000000244C390>
>>> list(mm)
[2, 3, 4]
>>>
```

字典
===

正则
===

捕获
---

sound = re.compile(r'<em class="additional spell phonetic">(.+?)</em>').findall(html)
    if len(sound) > 0:
        sound = sound[0]

命令行参数
===

```python
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("file", help="the full path of the file which gonna be interpreted as input")
args = parser.parse_args()
fileNameInput = args.file
```

文件操作
===

```python
# 读取
fileinput = open(fileNameInput, "rt", encoding='utf-8')
words = fileinput.read().split("\n")
fileinput.close()

# 写入
fileOutput = open(outputName, "w", encoding='utf-8')
fileOutput.write(output)
fileOutput.close()
```

抓取网页
===

import urllib.request
page = urllib.request.urlopen(url)
html = page.read()
html.decode('utf-8')  # 返回网页文本（字符串）