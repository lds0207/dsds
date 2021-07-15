function makeColumnDefs(gridOptionNm, gridId,  gridDiv, callback) {
    console.log(gridId);
    var divVar = document.querySelector('#'+gridDiv);
    console.log(divVar);
    $.ajax({
        type: 'GET',
        url: '/api/ccsy001/'+ gridId,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8'
    }).done(function (data) {
        data.forEach(function (item) {
            if (item.useYn == 'Y') {
                var opt = { headerName: item.colKor, field: item.colEng };
                opt.width = item.colWidth;
                opt.maxWidth = item.colMaxWidth;
                opt.minWidth = item.colMinWidth;
                if (item.colType != null) {
                    var typeList = item.colType.split(',');
                    if (typeList.length == 1) {
                        opt.type = typeList[0];
                    } else {
                        opt.type = typeList;
                    }

                }
                if (item.colFilter != null) {
                    opt.filter = item.colFilter;
                }
                if (item.editYn == 'Y') {
                    opt.editable = true;
                }
                if (item.hideYn == 'N') {
                    opt.hide = true;
                }
                if (item.colCellEditor != null) {
                    opt.cellEditor = item.colCellEditor;
                }
                if (item.colCellEditorParam != null) {
                    opt.cellEditorParams = function(params) {
                        return {
                            values: item.colCellEditorParam.split(','),
                            formatValue: function(value) {
                                return value ;
                            },
                        };
                    };
                }
                if (item.colCellRenderer != null && item.colCellRenderer != "") {
                    opt.cellRenderer = eval(item.colCellRenderer);
                }
                gridOptionNm.columnDefs.push(opt);

            }
        })
        console.log(gridOptionNm);
        new agGrid.Grid(divVar, gridOptionNm);
        if (callback != null) {
            callback();
        }

    }).fail(function (error) {
    });
}


// 그리드 최소 높이값은 330px이상 입니다.
// 그리드 높이 = 현재 창의 바디 높이값 - 입력한값(inputHeight) 입니다.
// ex) reSizeGridHeight('CCSY140_grid_grp','700', 270, 330);
function reSizeGridHeight(gridDivId, defaultHeight, inputHeight, minHeight) {

    $('#'+gridDivId).css('height', ''+defaultHeight+'px');

    $(window).resize(function() {
        var currentBodyHeight = $(document.body).height();
        var divHeight = currentBodyHeight - inputHeight;
        if(divHeight <= minHeight){
            $('#'+gridDivId).css('height', ''+minHeight+'px');
        } else {
            $('#'+gridDivId).css('height', ''+divHeight+'px');
        }
    });
}