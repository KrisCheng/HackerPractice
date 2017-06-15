'use strict';
//Form相关操作

//获取表单的值
var input1 = document.getElementById('email');
console.log(input1.value);
//修改
input1.value = "kris.dacpc@gmail.com";

//是否勾选
var label1 = document.getElementById('monday');
console.log(label1.checked);
label1.checked = true;

//提交表单
function doSubmitForm(){
  var form = document.getElementById('test-form-input');
  form.value="success";
}

function checkForm(){
  var pwd = document.getElementById('password');
  pwd.value = toMD5(pwd.value);
  console.log('t');
  return true;
}

//简单校验
var checkRegisterForm = function () {
  var user = document.getElementById('username-1').value,
        psd = document.getElementById('password-1').value,
        psd2 = document.getElementById('password-2').value,
        usertest = /(\w){3,10}/;
    if(!usertest){
        alert('用户名必须是3-10位英文字母或数字');
        return false;
    } else if (psd.length>20 || psd.length<6){
        alert('口令必须是6-20位');
        return false;
    } else if (psd !== psd2){
        alert('两次输入口令必须一致');
    } else {
        return true;
    }
}
