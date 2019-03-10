define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/delivery/index',
                    add_url: 'user/delivery/add',
                    edit_url: 'user/delivery/edit',
                    del_url: 'user/delivery/del',
                    multi_url: 'user/delivery/multi',
                    table: 'user_delivery',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'duid',
                sortName: 'duid',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'duid', title: __('Duid')},
                        {field: 'username', title: __('Username')},
                        {field: 'realname', title: __('Realname')},
                        {field: 'password', title: __('Password')},
                        {field: 'phone', title: __('Phone')},
                        {field: 'head_pic', title: __('Head_pic')},
                        {field: 'salt', title: __('Salt')},
                        {field: 'state', title: __('State')},
                        {field: 'work_state', title: __('Work_state')},
                        {field: 'wallet', title: __('Wallet')},
                        {field: 'type', title: __('Type')},
                        {field: 'create_time', title: __('Create_time'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});