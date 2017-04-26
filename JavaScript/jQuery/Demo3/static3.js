'use strict';
//jquery 事件

var a = $('#test-link');
a.click(function () {
    alert('Hello!');
});
//鼠标移动事件
$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {
        $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    });
});

// practice  全选/不全
var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();

// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});

function updateLabel() {
  let allChecked = langs.filter(':checked').length === langs.length;
  selectAll.prop('checked', allChecked);
  if (allChecked) {
    selectAllLabel.hide();
    deselectAllLabel.show();
  } else {
    selectAllLabel.show();
    deselectAllLabel.hide();
  }
}

selectAll.change(function(e) {
  langs.prop('checked', $(this).is(':checked'));
  updateLabel();
})

invertSelect.click(function(e) {
  langs.click();
})

langs.change(() => updateLabel());
