### 了解Vue的入口
Vue使用[rollup](https://rollupjs.org/)构建，入口文件在/src/platforms/web目录下。vue主要包括两个模块[runtime & compiler](https://cn.vuejs.org/v2/guide/installation.html#术语)，本文选用entry-runtime-with-compiler.js作为入口文件。

### Vue是如何渲染的
* 创建Vue实例，调用Vue.prototype._init方法进行数据初始化；
* 调用Vue.prototype.$mount方法，解析HTML结构，创建一个js对象（AST树）来表达，在解析的过程中根据AST树创建一个渲染的方法vm.$options.render（用来生成vdom）；
* 创建Watcher对象用来进行DOM元素的更新，进行依赖收集找到依赖此watcher的data属性；
* 调用Vue.prototype._render方法获取vdom；
* 调用Vue.prototype._update方法，把vdom重新生成DOM结构添加到HTML中，并删除之前的DOM结构；
* PS：AST（Abstract Syntax Tree）

### Vue的响应原理
* 核心代码在（/src/core/observer）目录下；
* Vue会通过Object.defineProperty方法为vm._data中的属性创建get、set访问器，访问器可以对属性的读取和写入进行拦截，这个是递归操作，所以每个属性都会有；
* Vue创建watcher实例来为属性创建依赖。首先创建Watcher实例过程中，会把当前的watcher实例保存在全局的Dep.target中。然后会调用实例的getter方法，getter方法执行时如果有从vm._data中的取值操作，便会由此属性的get访问器拦截，并把当前的watcher记录在此属性的依赖项中（dep.subs）。getter执行完毕后，会把Dep.target置空，完成依赖的收集；
* 对于收集过依赖的属性，如果值有所变化会被set访问器拦截，这时会调用dep.notify方法对dep.subs中的依赖进行依次执行，比如在更新属性值的同时，完成DOM元素的更新，并且执行$watch的回调，这其实就是执行了这个属性值的依赖（watcher实例）；
* 如果单独取属性值并不会进行依赖收集，因为Dep.target为空，get访问器会直接返回属性值；
* 从依赖收集到依次执行，这就是观察者模式，通过订阅值的变更来执行依赖的代码；
* 关于数组的响应，Vue是通过重写数组的方法来进行的，如果调用数组的方法，那么执行dep.notify依次对依赖执行，最后进行值的返回；

### Vue中事件处理
* vue在创建vdom的过程中，会把事件放置在vdom.data.on中；
* 在patch（/src/core/vdom/patch.js）方法中使用invokeCreateHooks方法创建元素的属性；
* vue的实例方法$on，$once，$off，$emit都是对vm._events属性进行操作；

> 关于invokeCreateHooks方法
> * 该方法是patch方法的一个闭包函数，主要用来调用create钩子函数；
> * 该方法主要遍历patch中的变量cbs，而变量cbs中的数据来自（/src/platforms/web/runtime/modules）中，这个模块主要用来为DOM元素处理attrs，props，events，class等基本属性；

> 关于$on，$once，$off，$emit实例方法[官方](https://cn.vuejs.org/v2/api/#vm-on)
> * vm._events的结构如下 _events: { eventsName: [...callbacks] }
> * $on方法会向vm._events中添加一个以事件名为Key值，回调函数数组为Value的对象，达到注册事件的目的；
> * $off方法会移除_events中的事件对象，达到注销事件的目的；
> * $once方法依旧走的$on的执行流程，但是会重写回调函数，在执行完回调函数后调用$off注销此方法，达到执行一次的目的；
> * $emit方法会根据事件名取回调函数执行，达到触发事件的目的；
