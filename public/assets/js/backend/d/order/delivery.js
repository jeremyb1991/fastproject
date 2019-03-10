define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'd/order/delivery/index',
                    add_url: 'd/order/delivery/add',
                    edit_url: 'd/order/delivery/edit',
                    del_url: 'd/order/delivery/del',
                    multi_url: 'd/order/delivery/multi',
                    table: 'd_order_delivery',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'oid',
                sortName: 'oid',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'oid', title: __('Oid')},
                        {field: 'duid', title: __('Duid')},
                        {field: 'w_name', title: __('W_name')},
                        {field: 'w_phone', title: __('W_phone')},
                        {field: 'w_address', title: __('W_address')},
                        {field: 'w_lat', title: __('W_lat')},
                        {field: 'w_lng', title: __('W_lng')},
                        {field: 'u_name', title: __('U_name')},
                        {field: 'u_phone', title: __('U_phone')},
                        {field: 'u_address', title: __('U_address')},
                        {field: 'u_lat', title: __('U_lat')},
                        {field: 'u_lng', title: __('U_lng')},
                        {field: 'shipping_fee', title: __('Shipping_fee')},
                        {field: 'deadline', title: __('Deadline')},
                        {field: 'state', title: __('State')},
                        {field: 'finish_time', title: __('Finish_time'), operate:'RANGE', addclass:'datetimerange'},
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