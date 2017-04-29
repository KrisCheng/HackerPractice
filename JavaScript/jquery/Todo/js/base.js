/**
 * Created by KrisChan on 26/04/2017.
 * All right reserved.
 */
;(function() {
    'use strict';
    var $form_add_task = $('.add-task'),
        $task_delete_trigger,
        $task_detail = $('.task-detail'),
        $task_detail_cancel = $('.task-detail-cancel'),
        $task_detail_trigger,
        task_list = {};

    init();

    $task_detail_cancel.on('click',hide_task_detail);

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
        $task_detail.show();
        $task_detail_cancel.show();
    }

    function hide_task_detail(){
        $task_detail.hide();
        $task_detail_cancel.hide();
    }

    function render_task_detail(index){
        if(index === undefined || !task_list[index]){
            return;
        }
        var item = task_list[index];
        var tpl  =  '<div class="content">'+
                    item.content+
                    '</div>'+
                    '<div class="desc">'+
                    '<textarea class="description"></textarea>'+
                    '</div>'+
                    '<div class="remind">'+
                    '<p>Remind Time</p>'+
                    '<input class="date" type="date">'+
                    '</div>';

        $task_detail.html(tpl);
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
    }

    /*
    * 渲染所有Task模板
    * */
    function render_task_list(){
        var $task_list = $('.task-list');
        $task_list.html('');//清除之前遗留html
        for(var i = 0; i < task_list.length; i++){
            var $task = render_task_item(task_list[i],i);
            $task_list.append($task);
        }
        $task_delete_trigger= $('.action.delete');
        $task_detail_trigger= $('.action.detail');
        listen_task_delete();
        listen_task_detail();
    }

    function render_task_item(data, index){
        if(!data){
            return;
        }
        var list_item_tpl =
            '<div class="task-item" data-index="'+index+'">'+
            '<span><input type="checkbox"></span>'+
            '<span class="task-content">'+ data.content+'</span>'+
            '<span class="action delete">Delete</span>'+
            '<span class="action detail">Detail</span>'+
            '</div>';
        return $(list_item_tpl);
    }

    function refresh_task_list(){
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