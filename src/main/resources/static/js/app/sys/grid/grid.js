var ccsy001 = {
    init : function () {
        var CCSY001_grid = document.querySelector('#CCSY001_grid');
        new agGrid.Grid(CCSY001_grid, ccsy001GridOptions);
        // ccsy001.readGridInfo();

        $("#CCSY001_btn_new").on("click", function () {
            ccsy001.addRow();
        });
        $("#CCSY001_btn_del").on("click", function () {
            ccsy001.delRow();
        });
        $("#CCSY001_btn_refresh").on("click", function () {
            ccsy001.readGridInfo();
        });
        $("#CCSY001_btn_save").on("click", function () {
            ccsy001.saveRows();
        });

        var nowHeight = window.outerHeight -350;
        reSizeGridHeight('CCSY001_grid', nowHeight, 350, 700 );

    },
    readGridInfo : function () {
        agGrid.simpleHttpRequest({url: '/api/ccsy001'}).then(function(data) {
            ccsy001GridOptions.api.setRowData(data);
        });
    },
    addRow : function () {

        $.ajax({
            type: 'GET',
            url: '/api/userInfo',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (data) {
            console.log(data);
            if (data.userRole == 'ADMIN') {
                var CCSY001_newRow = {
                    useYn: 'Y',
                    hideYn: 'Y',
                    editYn: 'Y',
                    colWidth : 150,
                    colMinWidth : 100,
                    colMaxWidth : 1500
                }
                ccsy001GridOptions.api.updateRowData({add: [CCSY001_newRow]});
            }else{
                alert("시스템관리자외 신규등록은 불가능합니다.");
            }

        }).fail(function (error) {
        });
    },
    delRow : function () {
        var selectedRows = ccsy001GridOptions.api.getSelectedRows();
        var check = confirm("삭제하시겠습니까?");
        if (check) {
            selectedRows.forEach( function(selectedRow, index) {
                $.ajax({
                    type: 'DELETE',
                    url: '/api/ccsy001/'+ selectedRow.tableId,
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8'
                }).done(function (data) {
                    ccsy001.readGridInfo();
                }).fail(function (error) {
                });
            });

        }
    },
    saveRows : function () {
        var data = ccsy001GridOptions.api.getSelectedRows();
        $.ajax({
            type: 'POST',
            url: '/api/ccsy001',
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
            ccsy001.readGridInfo();
        }).fail(function (error) {
        });
    }, test: function () {
        console.log(makeColumnDefs());
    }
}



var ccsy001GridOptions = {
    columnDefs:[
        { headerName: "ID", field: 'tableId', hide: true}
        ,{ headerName: "그리드", field: 'gridId', editable: true, width : 180}
        ,{ headerName: "그리드명", field: 'gridNm', editable: true, width : 180}
        ,{ headerName: "그리드컬럼명", field: 'colKor', editable: true, width : 200}
        ,{ headerName: "DB컬럼명", field: 'colEng', editable: true, width : 200}

        ,{ headerName: "컬럼넓이", field: 'colWidth', editable: true, type: 'numberColumn'}
        ,{ headerName: "컬럼최소넓이", field: 'colMinWidth', editable: true, type: 'numberColumn'}
        ,{ headerName: "컬럼최대넓이", field: 'colMaxWidth', editable: true, type: 'numberColumn'}
        ,{ headerName: "수정여부", field: 'editYn', editable: true, width : 80,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: function(params) {
                var ext = ["Y","N"];
                return {
                    values: ext,
                    formatValue: function(value) {
                        return value ;
                    },
                };
            },}
        ,{ headerName: "사용여부", field: 'useYn', editable: true, width : 80,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: function(params) {
                var ext = ["Y","N"];
                return {
                    values: ext,
                    formatValue: function(value) {
                        return value ;
                    },
                };
            },}
        ,{ headerName: "화면표시여부", field: 'hideYn', editable: true, width : 80,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: function(params) {
                return {
                    values: ["Y","N"],
                    formatValue: function(value) {
                        return value ;
                    },
                };
            },}
        ,{ headerName: "정렬순서", field: 'ordNo', type: 'numberColumn', editable: true, width : 80}
        ,{ headerName: "컬럼타입", field: 'colType', editable: true, width : 200}
        ,{ headerName: "컬럼필터", field: 'colFilter', editable: true, width : 200}
        ,{ headerName: "컬럼에디터", field: 'colCellEditor', editable: true, width : 200}
        ,{ headerName: "컬럼에디터변수", field: 'colCellEditorParam', editable: true, width : 200}
        ,{ headerName: "컬럼렌더러", field: 'colCellRenderer', editable: true, width : 200}
        ,{ headerName: "작성자", field: 'creId'}
        ,{ headerName: "작성일자", field: 'creDt', type:['dateColumn', 'nonEditableColumn']}
        ,{ headerName: "수정자", field: 'modId'}
        ,{ headerName: "수정일자", field: 'modDt', type:['dateColumn', 'nonEditableColumn']}

    ],
    //기본 컬럼 옵션 설정
    defaultColDef: {
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
            filter: 'agDateColumnFilter',
            filterParams: {
                comparator: function(filterLocalDateAtMidnight, cellValue) {
                    var cellDate = new Date(cellValue);
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
    },
    onRowClicked : function (event) {
    },
    onCellClicked: function (event) {
        var colCk = ccsy001GridOptions.api.getFocusedCell().column.colId;
        var org = event.node.data.tableId;

        $.ajax({
            type: 'GET',
            url: '/api/userInfo',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (data) {
            console.log(data);
            if (data.userRole != 'ADMIN') {
                if (colCk == "gridId" || colCk == 'colEng') {
                    if(org != '' && org != null){
                        ccsy001GridOptions.api.tabToNextCell();
                        alert("기존에 등록된 그리드ID와 DB컬럼명은 변경이 불가능합니다.");
                    }
                }
            }
        }).fail(function (error) {
        });
    },
}

ccsy001.init();