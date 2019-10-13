# 我想实现以下几个功能 

## 核心按钮点击 卡片产生相关效果
1. 点击✅号 最顶上的卡片就向**已掌握**方向移动 并且快速缩小至透明（消失）同时 已掌握 数字加1 
2. 点击❣️号 最顶上的卡片向**需巩固**方向移动，并且快速缩小至透明（消失） 同时 需巩固 数字加1
3. 点击❎号 最顶上的卡片向**需巩固**方向移动，并且快速缩小至透明（消失） 同时 需巩固 数字加1
4. 所有顶层卡片消失动画的同时 ， 底部也会有新增一个卡片的动画
5. prev 这个按钮，在第一次点击这个按钮之后就会出现，点击这个prev这个按钮能回退一次，即刚出现在底部的卡片消失，原来顶上的卡片重新出现，动画是反向的 要符合视觉逻辑，但退回后 prev这个按钮就消失 或者是不能点击 因为只能退回一张 加了数字1的分类 也相应的数字也要减1

## 卡片本身点击的内容出现效果
1. 蓝色箭头旋转朝向下方 
2. 答案区域显示出答案


# 数据结构
分成三部分 
1. 本身知识库的数据 
2. 每一个用户选择一个知识库就会拉取统一的知识库数据之后 就生成了自己的数据 用户自身数据库的数据不仅包含知识库 还包含每一条数据的分类 和 熟练度
3. 每一次用户的点击按钮操作都会修改相对应卡片的分类和熟练度数据
4. 卡片的呈现是由在data中的呈现数组来呈现的，修改数组中的内容就会改变当前学习的卡片
5. 用一个专门的方法来修改data中的呈现数组
6. 用一个专门的方法来进行所有知识库内容的排序，并且存放到data中的已排序知识库专用数组中 它和呈现数组是两个数组 呈现数组永远是已排序知识库数组中的最前面三个数据

data中还有一个属性，专门用来存放上一个数据

{
    que:'什么是语义化'，
    ans:'xxxxxxxxxxxxxxxxxxxxxxx'
    state:0，
    orderNumber:0,
    timestap:''
}

## 数据的排序
state  0 未学习 1 需巩固 2 已掌握
### 未学习的排序规则
ordernumber  生成用户个人数据时按照 都是0 按数据获取到的顺序排默认序

### 需巩固排序
未学习的卡片点击 ❗️或者❎号都会变成state 1 然后点击❎ ordernumber -10
点击感叹号 ordernumber -3 
如果点击✅号 ordernumber  + 5 同时state 变成 2
每次状态切换时都要生成一个时间磋

### 已掌握排序
首先按ordernumber 排序 然后相同的比较时间磋


要有时间磋 用来最后一级的排序
所有知识点要整体排序
然后三种状态又要内部排序
要考虑 后期加知识点 每次开启都要拉取新的数据和用户数据做对比 把新加入的知识点 加入到用户的个人数据里面