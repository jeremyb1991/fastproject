define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'd/user/delivery/identification/index',
                    add_url: 'd/user/delivery/identification/add',
                    edit_url: 'd/user/delivery/identification/edit',
                    del_url: 'd/user/delivery/identification/del',
                    multi_url: 'd/user/delivery/identification/multi',
                    table: 'd_user_delivery_identification',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'duid', title: __('Duid')},
                        {field: 'ID_name', title: __('Id_name')},
                        {field: 'ID_holding_pic', title: __('Id_holding_pic')},
                        {field: 'ID_pic_front', title: __('Id_pic_front')},
                        {field: 'ID_pic_back', title: __('Id_pic_back')},
                        {field: 'ID_NO', title: __('Id_no')},
                        {field: 'reason', title: __('Reason')},
                        {field: 'state', title: __('State')},
                        {field: 'operator', title: __('Operator')},
                        {field: 'update_time', title: __('Update_time'), operate:'RANGE', addclass:'datetimerange'},
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