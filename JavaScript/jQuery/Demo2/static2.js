'use strict';

//jquery操作DOM
var test1 = $('#test-ul li');
test1.html("<h1>hello world.</h1>");
$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');
var div = $('#test-css');
div.css('font-size', '20px'); // 设置CSS属性
// div.hide(); 隐藏

//表单操作
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

//val用于统一取值和赋值
input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val('Hello World.'); // 文本区域已更新为'Hi'

//添加DOM节点
var ul = $('#test-div>ul');
ul.append('<li><span>C++</span></li>');

var ps = document.createElement('li');
// ps.innerHTML = '<span>Pascal</span>';
// 添加DOM对象:
ul.append(ps);

//删除节点
var li = $('#test-div>ul>li');
// li.remove(); // 所有<li>全被删除

//practice 添加节点并按字母排序
var list=$('#test-div>ul>li>span').map(function () {
            return this.innerHTML;
        }).get();
        var info=['Pascal','Ruby','Lua'];
        var newlist=list.concat(info).sort();
        $('#test-div>ul>li').remove();
        for (var i = 0; i < newlist.length; i++) {
            $('#test-div>ul').append('<li><span>'+newlist[i]+'</span></li>');
        }
