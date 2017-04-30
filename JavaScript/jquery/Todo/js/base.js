/**
 * Created by KrisChan on 26/04/2017.
 * All right reserved.
 */
;(function() {
    'use strict';

    var $form_add_task = $('.add-task'),
        $task_delete_trigger,
        $task_detail_trigger,
        $task_detail = $('.task-detail'),
        task_list = {},
        current_index,
        $update_form,
        $task_detail_content,
        $task_detail_content_input,
        $checkbox_complete,
        $msg = $('.msg'),
        $msg_content = $msg.find('.msg-content'),
        $msg_content_cancel = $msg.find('.msg-cancel'),
        $alerter = $('.alerter');

    init();

    $msg_content_cancel.on('click', function () {
        hide_msg()
    });

    $form_add_task.on('submit', function (e){
        var new_task = {};
        //禁用默认行为
        e.preventDefault();
        var $input = $(this).find('input[name=content]');
        new_task.content = $input.val();
        if(!new_task.content){
            return;
        }
        if(add_task(new_task)){
          $input.val(null);
        }
    });

    function listen_task_detail(){
        $task_detail_trigger.on('click', function(){
            var $this = $(this);
            var $item = $this.parent();
            var index = $item.data('index');
            show_task_detail(index);
        })
    }

    function show_task_detail(index){
        render_task_detail(index);
        current_index = index;
        $task_detail.show();
    }

    //监听task是否完成
    function listen_checkbox_complete(){
        $checkbox_complete.on('click', function(){
            var $this = $(this);
            var index = $this.parent().parent().data('index');
            var item = get(index);
            if(item.complete){
                update_task(index, {complete: false});
            }
            else{
                update_task(index, {complete: true});
            }
        })
    }

    function get(index){
        return store.get('task_list')[index];
    }

    function update_task(index, data){
        if(index === undefined || !task_list[index]){
            return;
        }
        task_list[index] = $.extend({}, task_list[index], data);
        refresh_task_list();
    }

    function hide_task_detail(){
        $task_detail.hide();
    }

    function render_task_detail(index){
        if(index === undefined || !task_list[index]){
            return;
        }
        var item = task_list[index];
        //初次判断
        if(item.desc === undefined){
            item.desc='';
            item.remind_date='';
        }
        var tpl  =  '<form>'+
                    '<div class="content">'+
                    item.content+
                    '</div>'+
                    '<div>'+
                    '<input class="content-modify" autofocus autocomplete="off" type="text" name="content" value="' + item.content+ '">'+
                    '</div>'+
                    '<div class="desc">'+
                    '<textarea  name="desc" class="description">'+
                    item.desc+
                    '</textarea>'+
                    '</div>'+
                    '<div class="remind">'+
                    '<p>Remind Time</p>'+
                    '<input  class="datetime" name="remind_date" type="text" value="' + item.remind_date +'">'+
                    '<button class="update" type="submit">Update</button>'+
                    '<button class="cancel" type="reset">Cancel</button>'+
                    '</div>'+
                    '</form>';

        $task_detail.html(tpl);
        $('.datetime').datetimepicker();
        $update_form = $task_detail.find('form');

        //双击变更Task名称
        $task_detail_content = $update_form.find('.content');
        $task_detail_content_input = $update_form.find('[name=content]');
        $task_detail_content.on('dblclick',function(){
            $task_detail_content_input.show();
            $task_detail_content.hide();
        });

        $update_form.on('reset', function(e){
            e.preventDefault();
            hide_task_detail();
        });

        $update_form.on('submit', function(e){
            e.preventDefault();
            var data = {};
            data.content = $(this).find('[name=content]').val();
            data.desc = $(this).find('[name=desc]').val();
            data.remind_date = $(this).find('[name=remind_date]').val();
            update_task(index,data);
            hide_task_detail();
        })
    }

    function listen_task_delete() {
        $task_delete_trigger.on('click', function () {
            var $this = $(this);
            var $item = $this.parent();
            var index = $item.data('index');
            var tmp = confirm("Confirm?");
            tmp ? delete_task(index) : null;
        });
    }

    function add_task(new_task){
        task_list.push(new_task);
        refresh_task_list();
        return true;
    }

    function init(){
        task_list = store.get('task_list') || [];
        if(task_list.length){
            render_task_list();
        }
        task_remind_check();
        //store.clear(); //用于清除缓存
    }

    function task_remind_check(){
        var current_timestamp;
        var itl = setInterval(function(){
            for(var i = 0; i < task_list.length; i++){
                var task_timestamp,item = get(i);
                if(item === null || item.remind_date === undefined || item.informed){
                        continue;
                }
                current_timestamp = (new Date()).getTime();
                task_timestamp = (new Date(item.remind_date)).getTime();
                if((current_timestamp - task_timestamp) >= 1){
                    update_task(i, {informed :true});
                    show_msg(item.content);
                }
            }
        },300);
    }

    function show_msg(msg){
        $msg_content.html(msg);
        $msg.show();
        $alerter.get(0).play();
    }

    function hide_msg(){
        $msg.hide();
    }

    /*
    * 渲染所有Task模板
    * */
    function render_task_list(){
        var $task_list = $('.task-list');
        $task_list.html('');//清除之前遗留html
        var complete_items =[];
        for(var i = 0; i < task_list.length; i++){
            var item = task_list[i];
            if(item && item.complete){
                complete_items[i] = item;
            }
            else{
                var $task = render_task_item(item,i);
                $task_list.prepend($task);
            }
        }

        for(var j = 0; j < complete_items.length; j++){
                $task = render_task_item(complete_items[j], j);
                if(!$task) {
                    continue;
                }
                $task.addClass('completed');
                $task_list.append($task);
        }

        $task_delete_trigger = $('.action.delete');
        $task_detail_trigger = $('.action.detail');
        $checkbox_complete = $('.task-checkbox[type=checkbox]');
        listen_task_delete();
        listen_task_detail();
        listen_checkbox_complete();
    }

    function render_task_item(data, index){
        if(!data){
            return;
        }
        var list_item_tpl =
            '<div class="task-item" data-index="'+index+'">'+
            '<span><input class="task-checkbox" '+ (data.complete ? 'checked' : '') +' type="checkbox"></span>'+
            '<span class="task-content">'+ data.content+'</span>'+
            '<span class="action delete">Delete</span>'+
            '<span class="action detail">Detail</span>'+
            '</div>';
        return $(list_item_tpl);
    }

    function  refresh_task_list(){
        store.set('task_list', task_list);
        render_task_list();
    }

    function delete_task(index){
        if(index === undefined || !task_list[index]){
            return;
        }
        delete task_list[index];
        refresh_task_list();
    }

})();