---
layout: post
title:  一元n次方程
date:   2018-09-04 07:29:00:00 +0800
tags:
  - 备忘
categories:
  - 数学
  - 多项式
mathjax: true
---

# 一元二次方程
形如 \\(f(x) = ax^2 + bx + c\\) 称作一元二次方程，即自变量只有一个，自变量的最高次数为2。

## 根的性质
想求 \\(f(x) = ax^2 + bx + c = 0\\) 的根，有一个思路：先将表达式 \\(ax^2 + bx + c = 0\\) 转成 \\((x+A)^2=B\\) 的形式，之后即可得 \\(x=\pm \sqrt{B}-A\\) 。  
而 \\((x+A)^2 = x^2 + 2Ax + A^2\\) ，所以先将 \\(ax^2 + bx + c = 0\\) 转化成这种形式，推导过程如下：
<!-- more -->
消除二次项系数
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$
即
$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

等号两边同时加项，将左边构造成 \\(x^2 + 2Ax + A^2\\) 的形式
$$x^2 + \frac{b}{2a}x\cdot 2 + (\frac{b}{2a})^2 = -\frac{c}{a}-(\frac{b}{2a})^2$$

左边变形，右边同分母相加
$$(x+\frac{b}{2a})^2 = \frac{-4ac+b^2}{4a^2}$$

求得
$$x=\pm \sqrt{\frac{b^2-4ac}{4a^2}} - \frac{b}{2a} = \frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

## 抛物线性质
由以上结果可知，抛物线基于 \\(x=-\frac{b}{2a}\\) 对称，将该值代入方程，得原点坐标为 \\((-\frac{b}{2a},\frac{-b^2+4ac}{4a})\\) 。

## 判别式
在根表达式中， \\(\Delta = b^2-4ac\\) 为`判别式`，可根据判别式的值大于、等于、小于0的情况，判断方程有两个实根，一个实根还是有两个`共轭复根`。

# 韦达定理
## 定义
如果方程 $f(x) = a_0x^n+a_1x^{n-1}+...+a_{n-1}x+a_n=0$ $(a_0\neq 0)$ 的n个根是 $x_1,x_2,...,x_{n-1},x_n$，那么
$$\begin{cases}
x_1+x_2+\cdot\cdot\cdot+x_n = -\frac{a_1}{a_0},\\
x_1x_2+x_1x_3+\cdot\cdot\cdot+x_{n-1}x_n = \frac{a_2}{a_0},\\
\cdot\cdot\cdot\\
x_1x_2x_3 \cdot\cdot\cdot x_{n-1}x_n = (-1)^n\frac{a_n}{a_0}.
\end{cases}$$
## 证明
据书上[^1]所说，因为 $x_1, x_2, \cdot\cdot\cdot, x_n$ 是 $f(x)=0$ 的根，所以 $f(x)$ 必定含有n个一次因式：
$x-x_1, x-x_2, \cdot\cdot\cdot, x-x_{n-1}, x-x_n$

并且
$f(x) = a_0(x-x_1)(x-x_2) \cdot\cdot\cdot (x-x_{n-1})(x-x_n)$  
[^2]

把上式右端按照$x$`降幂展开`得
$$a_0x^n+a_1x^{n-1}+...+a_{n-1}x+a_n =\\ 
a_0x^n-a_0(x_1+x_2+\cdot\cdot\cdot+x_n)x^{n-1} \\
+a_0(x_1x_2+x_1x_3+\cdot\cdot\cdot+x_{n-1}x_n)x^{n-2}\\
+\cdot\cdot\cdot+(-1)^na_0x_1x_2x_3\cdot\cdot\cdot x_{n-1}x_n$$

这是一个恒等式，根据[多项式恒等定理](http://xuewen.cnki.net/CJFD-YMXK199604011.html)，得
\begin{cases}
a_1=-a_0(x_1+x_2+\cdot\cdot\cdot+x_n)  \\ 
a_2=-a_0(x_1x_2+x_1x_3+\cdot\cdot\cdot+x_{n-1}x_n)  \\ 
\cdot\cdot\cdot \\
a_n=(-1)^na_0x_1x_2x_3 \cdot\cdot\cdot x_{n-1}x_n
\end{cases}

故定理得证
$$\begin{cases}
x_1+x_2+\cdot\cdot\cdot+x_n = -\frac{a_1}{a_0},\\
x_1x_2+x_1x_3+\cdot\cdot\cdot+x_{n-1}x_n = \frac{a_2}{a_0},\\
\cdot\cdot\cdot\\
x_1x_2x_3 \cdot\cdot\cdot x_{n-1}x_n = (-1)^n\frac{a_n}{a_0}.
\end{cases}$$

# 方程变换
## 变换后各个根为原方程各个根的k倍
定理：方程 $ f(\frac{y}{k}) = 0 $ 的各个根分别等于方程 $ f(x) = 0 $ 各个根的k倍。
证明：设 $ a_i(i=1,2,\cdot\cdot\cdot , n) $ 是方程 $ f(x) = 0 $ 的根，则 $ f(a_i) = f(\frac{ka_i}{k}) = 0 $，所以 $ ka_i(i=1,2,\cdot\cdot\cdot , n) $ 是方程 $ f(\frac{y}{k}) = 0 $ 的根，又因为 $ f(\frac{y}{k}) = 0 $ 只有n个根，故 $ f(\frac{y}{k}) = 0 $ 的各根分别等于 $ f(x) = 0 $ 各根的k倍。

## 变换后各个根为原方程各个根相差k
$f(y+k)=0$ 的各个根分别等于方程 $ f(x) = 0 $ 的各个根减去k。

## 变换后各个根为原方程各个根的倒数
$f(\frac{1}{y})$ 的各个根分别等于方程 $ f(x) = 0 $ 的各个根的倒数。

### 倒根方程
如果n次方程 $g(x)$ 的各个根分别是n次方程 $f(x) = a_0x^n+a_1x^{n-1}+...+a_{n-1}x+a_n=0$ 各个根的倒数，那么 $g(x) = a_nx^n+a_{n-1}x^{n-1}+...+a_1x+a_0=0$。

[^1]: 《初等数学研究》（主编：叶立军）第3.3节
[^2]: 这里我能理解当x取这些根值的其中之一时，等式的左右两边都为0，但我还不明白为啥据此能得出 $f(x)$ 一定有这n个因式，且这条等式（不管x取什么值都）成立，这个问题先放着。