'use strict';
//DOM操作

//获取DOM
// 选择<p>JavaScript</p>:
var js = document.getElementById("test-p");
console.log(js);
// 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
var arr = document.getElementsByClassName('c-red c-green')[0].children;
console.log(arr);
// 选择<p>Haskell</p>:
var haskell = document.getElementsByClassName('c-green')[1].lastElementChild;
console.log(haskell);

//更新DOM
var p = document.getElementById('p-id');
// 设置文本为abc:
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
p.style.color = '#ff0000';
p.style.fontWeight = 'bold';//修改CSS
//修改CSS

//插入DOM
var js2 = document.getElementById('js2'),
    list2 = document.getElementById('list2'),
    //创建一个新节点
    haskell2 = document.createElement('p');
    haskell2.id = 'haskell';
    haskell2.innerText = 'Haskell';
list2.appendChild(js2);
list2.appendChild(haskell2);
//insertBefore
var ref1 = document.getElementById('python');
list2.insertBefore(haskell2, ref1);

//改变颜色
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: blue }';
document.getElementsByTagName('head')[0].appendChild(d);

//节点按照字母表重新排序
var list3=document.getElementsByClassName('lang');
var n,i,arr3=[];
n=list3.length;

for(i=0;i<n;i++){
arr3[i]=list3[i].innerHTML;
}
arr3.sort();
for(i=0;i<n;i++){
list3[i].innerHTML=arr3[i];
}

//删除DOM
var parent = document.getElementById('parent');
parent.removeChild(parent.children[0]);
