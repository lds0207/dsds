package com.itzon.hpage.domain.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@ToString
@Table(name = "TB_GRID_INFO")
@Entity
public class TbGridInfo {

    @Id
    @Column(nullable = false, length = 40, name = "GRID_ID")
    private String gridId;

    @Column(nullable = false, length = 40, name = "GRID_NM")
    private String gridNm;

    @Column(nullable = false, length = 20, name = "GRID_COL_ENG")
    private String gridColEng;

    @Column(nullable = false, length = 20, name = "GRID_COL_KOR")
    private String gridColKor;

    @Column(nullable = true, length = 50, name = "GRID_COL_TYPE")
    private String gridColType;

    @Column(nullable = true, length = 50, name = "GRID_COL_FLTR")
    private String gridColFltr;

    @Column(nullable = true, length = 100, name = "GRID_COL_CELL_EDTR")
    private String gridColCellEdtr;

    @Column(nullable = true, length = 200, name = "GRID_COL_CELL_EDTR_PARM")//GRID_COL_CELL_EDITOR_PARAM
    private String gridColCellEdtrParm;

    @Column(nullable = true, length = 100, name = "GRID_COL_CELL_RNDR") //동적 셀 구성시 함수명 GRID_COL_CELL_RENDERER
    private String gridColCellRndr;

    @Column(nullable = false, length = 5, name = "GRID_COL_WDTH")
    private int gridColWdth;

    @Column(nullable = false, length = 5, name = "GRID_COL_MAX_WDTH")
    private int gridColMaxWdth;

    @Column(nullable = false, length = 5, name = "GRID_COL_MIN_WDTH")
    private int gridColMinWdth;

    @Column(nullable = false, length = 1, name = "GRID_EDIT_YN")
    private String gridEditYn;

    @Column(nullable = false, length = 1, name = "GRID_USE_YN")
    private String gridUseYn;

    @Column(nullable = false, length = 1, name = "GRID_HIDE_YN")
    private String gridHideYn;

    @Column(nullable = false, length = 3, name = "GRID_ORD_NO")
    private int gridOrdNo;
}
