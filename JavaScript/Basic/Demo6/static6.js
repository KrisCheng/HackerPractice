'use strict';
//文件操作
var f = document.getElementById("file-1");
var filename = f.value;

//判断上传文件类型
if(!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png')|| filename.endsWith('.gif'))){
  console.log("not a picture!");
}
//图片预览
var
   fileInput = document.getElementById("test-image-file"),
   info = document.getElementById("test-file-info"),
   preview = document.getElementById("test-image-preview");

   fileInput.addEventListener('change', function(){
     //清除背景图片
     preview.style.backgroundImage = '';
     //检查文件是否选择
     if(!fileInput.value){
       info.innerHTML = 'no file choose.';
       return;
     }
     //获取File引用：
     var file = fileInput.files[0];
     info.innerHTML = '文件：' + file.name + '<br>'+
                      '大小：' + file.size + '<br>'+
                      '修改：' + file.lastModifiedDate;
     if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
       alert("不是有效的图片！");
       return;
     }
     //读取文件
     var reader = new FileReader();
   reader.onload = function(e){
     var
        data = e.target.result;
        preview.style.backgroundImage = 'url('+data+')';
   };
   reader.readAsDataURL(file);
 });
