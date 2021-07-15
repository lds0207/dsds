



var ccsy120 = {
    init: function () {
        ccsy120.get_upMenuId_select();

        makeColumnDefs(ccsy120BigGridOptions,'CCSY120BigGrid', 'CCSY120_grid_big', ccsy120.read_big);
        makeColumnDefs(ccsy120SmlGridOptions,'CCSY120SmlGrid', 'CCSY120_grid_sml');


        $("#CCSY120_btn_big_new").on("click", function () {
            ccsy120.add_row_big();
        });

        $("#CCSY120_btn_sml_new").on("click", function () {
            ccsy120.add_row_sml();
        });

        $("#CCSY120_btn_big_del").on("click", function () {
            ccsy120.del_big();
        });
        $("#CCSY120_btn_sml_del").on("click", function () {
            ccsy120.del_sml();
        });
        $("#CCSY120_btn_big_refresh").on("click", function () {
            ccsy120.read_big();
        });
        $("#CCSY120_btn_sml_refresh").on("click", function () {
            ccsy120.read_sml();
        });
        $("#CCSY120_btn_big_save").on("click", function () {
            ccsy120.save_big();
        });
        $("#CCSY120_btn_sml_save").on("click", function () {
            ccsy120.save_sml();
        });
        var ccsy120nowHeight = window.outerHeight -600;
        reSizeGridHeight('CCSY120_grid_big', ccsy120nowHeight, 600, 700 );
        reSizeGridHeight('CCSY120_grid_sml', ccsy120nowHeight, 600, 700 );

    },
    read_big: function () {
        agGrid.simpleHttpRequest({url: '/api/ccsy120/big'}).then(function(data) {
            ccsy120BigGridOptions.api.setRowData(data);
        });
    },
    read_sml: function (upper_menu_id) {
        agGrid.simpleHttpRequest({url: '/api/ccsy120/sml/'+upper_menu_id}).then(function(data) {
            ccsy120SmlGridOptions.api.setRowData(data);
        });
    },
    on_row_click_big: function (data) {
        $("#CCSY120_UP_MENU_ID").val(data.menuId);
        ccsy120.read_sml(data.menuId);
    },

    del_big: function (data) {
        var selectedRows = ccsy120BigGridOptions.api.getSelectedRows();
        var check = confirm("상위메뉴를 삭제시 포함되는 하위메뉴까지 삭제됩니다. 삭제하시겠습니까?");
        if (check) {
            selectedRows.forEach( function(selectedRow, index) {
                $.ajax({
                    type: 'DELETE',
                    url: '/api/ccsy120/'+ selectedRow.menuId,
                    contentType: 'application/json; charset=utf-8'
                }).done(function () {
                    ccsy120.del_sml_when_del_big(selectedRow.menuId);
                    ccsy120.read_big();
                }).fail(function (error) {
                });
            });

        }
    },
    del_sml_when_del_big : function(menuId){
        $.ajax({
            type: 'DELETE',
            url: '/api/ccsy120/sml/'+ menuId,
            dataType : 'text',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            ccsy120.read_sml();
        }).fail(function (error) {
        });
    },
    del_sml: function () {
        var selectedRows = ccsy120SmlGridOptions.api.getSelectedRows();
        console.log(selectedRows);
        var check = confirm("삭제하시겠습니까?");
        if (check) {
            selectedRows.forEach( function(selectedRow, index) {
                console.log(selectedRow.menuId);
                $.ajax({
                    type: 'DELETE',
                    url: '/api/ccsy120/'+ selectedRow.menuId,
                    dataType : 'text',
                    contentType: 'application/json; charset=utf-8'
                }).done(function () {
                    ccsy120.read_sml($("#CCSY120_UP_MENU_ID").val());
                }).fail(function (error) {
                });
            });
        }
    },
    add_row_big : function(){
        var CCSY120_big_newRow = {
            menuUrl: '/',
            useYn: 'Y'
        }
        ccsy120BigGridOptions.api.updateRowData({add: [CCSY120_big_newRow]});
    },
    add_row_sml : function() {
        var upperId = $("#CCSY120_UP_MENU_ID").val();
        var CCSY120_sml_newRow = {
            upMenuId: upperId,
            menuUrl: '/',
            useYn: 'Y',
        }
        if (upperId != '') {
            ccsy120SmlGridOptions.api.updateRowData({add: [CCSY120_sml_newRow]});
        }
    }
    ,
    save_big: function () {
        var data = ccsy120BigGridOptions.api.getSelectedRows();

        $.ajax({
            type: 'POST',
            url: '/api/ccsy120/big',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (data) {
            if (data == 1) {
                //alert("메뉴가 등록되었습니다.");
            }else if (data == 2) {
                //alert("메뉴가 수정되었습니다.");
            }else{
                console.log("알수없는 코드 " + data);
            }
            ccsy120.read_big();
            ccsy120.clear_when_change_big();
        }).fail(function (error) {
        });
    },
    clear_when_change_big : function(){
        $("#CCSY120_UP_MENU_ID").val('');
        ccsy120.read_sml('');
    },
    save_sml: function(){
        var data = ccsy120SmlGridOptions.api.getSelectedRows();
        data.forEach(function(item){
            item.upMenuId = $("#CCSY120_UP_MENU_ID").val();
        });

        $.ajax({
            type: 'POST',
            url: '/api/ccsy120',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (data) {
            if (data == 1) {
                //alert("메뉴가 등록되었습니다.");
            }else if (data == 2) {
                //alert("메뉴가 수정되었습니다.");
            }else{
                console.log("알수없는 코드 " + data);
            }
            ccsy120.read_sml($("#CCSY120_UP_MENU_ID").val());
        }).fail(function (error) {
        });
    },

    clear : function () {
        $("#CCSY120_upMenuId").val("");
        $("#CCSY120_menuId").val("");
        $("#CCSY120_menuUrl").val("/");
        $("#CCSY120_menuNm").val("");
        $("#CCSY120_useYn").val("Y");
        $("#CCSY120_ordNo").val("");
    },
    read : function () {
        agGrid.simpleHttpRequest({url: '/api/ccsy120'}).then(function(data) {
            ccsy120BigGridOptions.api.setRowData(data);
        });
    },
    onRowClick : function(data){
        $("#CCSY120_upMenuId").val(data.upMenuId);
        $("#CCSY120_menuId").val(data.menuId);
        $("#CCSY120_menuUrl").val(data.menuUrl);
        $("#CCSY120_menuNm").val(data.menuNm);
        $("#CCSY120_useYn").val(data.useYn);
        $("#CCSY120_ordNo").val(data.ordNo);
    },
    valid_check: function () {
        if ($('#CCSY120_menuId').val() == '') {
            alert("메뉴 ID를 입력하세요");
            return false;
        }
        if ($('#CCSY120_menuUrl').val() == '') {
            alert("메뉴 URL을 입력하세요");
            return false;
        }
        if ($('#CCSY120_menuNm').val() == '') {
            alert("메뉴명을 입력하세요");
            return false;
        }
        if ($('#CCSY120_ordNo').val() == '') {
            alert("정렬순서를 입력하세요");
            return false;
        }

        return true;
    },
    get_upMenuId_select : function () {
        $.ajax({
            type: 'GET',
            url: '/api/ccsy120/upMenu',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (data) {
            var select = $("#"+"CCSY120_upMenuId");
            $(data).each(function(){
                select.append('<option value='+this.menuId+' >'+this.menuNm+'</option>');
            });
        }).fail(function (error) {
        });
    },
}
var ccsy120BigGridOptions = {
    columnDefs:[

    ],
    //기본 컬럼 옵션 설정
    defaultColDef: {
        minWidth:100,                           //컬럼 최소길이
        width: 130,                             //컬럼 길이
        flex:1,
        filter: 'agTextColumnFilter',           //어떤 필터를 적용할 것인가
        filterParams: {
            buttons: ['reset', 'apply'],
            closeOnApply: true,
        },
        floatingFilter: true,                   //상단 필터 여부(항상 떠있는지)
        resizable: true,                        //크기 조절 가능 여부
        sortable: true,                         //정렬 가능 여부

    },
    //컬럼 타입별 옵션 설정
    columnTypes: {
        numberColumn: { width: 100, filter: 'agNumberColumnFilter' },
        nonEditableColumn: { editable: false },
        dateColumn: {
            // specify we want to use the date filter
            filter: 'agDateColumnFilter',

            // add extra parameters for the date filter
            filterParams: {
                // provide comparator function
                comparator: function(filterLocalDateAtMidnight, cellValue) {
                    // In the example application, dates are stored as dd/mm/yyyy
                    // We create a Date object for comparison against the filter date
                    //구분자 // 일때 예시
                    /*var dateParts = cellValue.split('/');
                    var day = Number(dateParts[0]);
                    var month = Number(dateParts[1]) - 1;
                    var year = Number(dateParts[2]);
                    console.log(cellValue);
                    var cellDate = new Date(year, month, day);
                    console.log(cellDate);*/
                    var cellDate = new Date(cellValue);
                    // Now that both parameters are Date objects, we can compare
                    if (cellDate < filterLocalDateAtMidnight) {
                        return -1;
                    } else if (cellDate > filterLocalDateAtMidnight) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
            },
        },
    },
    rowSelection: 'single',
    rowMultiSelectWithClick: false,
    editType: 'fullRow',
    stopEditingWhenGridLosesFocus: true,
    onCellEditingStopped : function (event) {
        //ccsy150.save_ext(event.node.data);
        /*var data = event.node.data
        var check = data.menuId != null && data.menuUrl != null && data.menuNm != null && data.useYn != null && data.ordNo != null
        if (check) {
            ccsy120.save_big(event.node.data);
        }*/
    },
    onRowClicked : function (event) {
        ccsy120.on_row_click_big(event.node.data);

    },
//예로부터#2005
}

var ccsy120SmlGridOptions = {
    columnDefs:[

    ],
    //기본 컬럼 옵션 설정
    defaultColDef: {
        minWidth:100,                           //컬럼 최소길이
        width: 130,                             //컬럼 길이
        flex:1,                                 //컬럼길이 맞춤
        editable: false,                        //Cell edit 가능 여부
        filter: 'agTextColumnFilter',           //어떤 필터를 적용할 것인가
        filterParams: {
            buttons: ['reset', 'apply'],
            closeOnApply: true,
        },
        floatingFilter: true,                   //상단 필터 여부(항상 떠있는지)
        resizable: true,                        //크기 조절 가능 여부
        sortable: true,                         //정렬 가능 여부

    },
    //컬럼 타입별 옵션 설정
    columnTypes: {
        numberColumn: { width: 100, filter: 'agNumberColumnFilter' },
        nonEditableColumn: { editable: false },
        dateColumn: {
            // specify we want to use the date filter
            filter: 'agDateColumnFilter',

            // add extra parameters for the date filter
            filterParams: {
                // provide comparator function
                comparator: function(filterLocalDateAtMidnight, cellValue) {
                    // In the example application, dates are stored as dd/mm/yyyy
                    // We create a Date object for comparison against the filter date
                    //구분자 // 일때 예시
                    /*var dateParts = cellValue.split('/');
                    var day = Number(dateParts[0]);
                    var month = Number(dateParts[1]) - 1;
                    var year = Number(dateParts[2]);
                    console.log(cellValue);
                    var cellDate = new Date(year, month, day);
                    console.log(cellDate);*/
                    var cellDate = new Date(cellValue);
                    // Now that both parameters are Date objects, we can compare
                    if (cellDate < filterLocalDateAtMidnight) {
                        return -1;
                    } else if (cellDate > filterLocalDateAtMidnight) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
            },
        },
    },
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
    editType: 'fullRow',
    stopEditingWhenGridLosesFocus: true,
    onCellEditingStopped : function (event) {
        /*ccsy120.save_sml(event.node.data);*/
    },
    onRowClicked : function (event) {
        //ccsy120.onRowClick(event.node.data);
        //소메뉴 조회
    },

}



ccsy120.init();