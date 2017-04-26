'use strict';
//选择器
var div = $('#abc');
console.log(div);

//自由选择
var selected1 = $('test-jquery.input[name=name],test-jquery.input[name=email]');
// 高亮结果:
$('#test-jquery').find('*').css('background-color', '');
selected1.css('background-color', '#ffd351');

//层级选择器
var selected2 = $('ul.test-lang li');

selected2.css('background-color', '#ffd351');

//以json格式获取表单内容
var jsons = {};
var forms = $('form#test-form p');
var matchs = forms.find('input[name][type!=radio], input:checked, select');
matchs.each((index, ele)=> {
    jsons[ele.name] = ele.value;
});
var json = JSON.stringify(jsons);
// 显示结果:
if (typeof(json) === 'string') {
    alert(json);
}
else {
    alert('json变量不是string!');
}
