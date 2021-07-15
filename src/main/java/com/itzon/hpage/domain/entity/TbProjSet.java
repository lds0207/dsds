package com.itzon.hpage.domain.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@ToString
@Table(name = "TB_PROJ_SET")
@Entity
public class TbProjSet {
    //PK
    @Id
    @Column(nullable = false, length = 20, name = "PROJ_SET_ID")
    private String projSetId;

    //TB_PROJ_INFO의 PK
    @Column(nullable = false, length = 20, name = "PROJ_INFO_ID")
    private String projInfoId;

    //프로젝트 설명 제목
    @Column(nullable = true, length = 20, name = "PROJ_SET_SUB")
    private String projSetSub;

    //프로젝트 설명 내용
    @Column(nullable = true, length = 200, name = "PROJ_SET_CONT")
    private String projSetCont;

    //프로젝트 사진 경로
    @Column(nullable = true, length = 50, name = "PROJ_SET_PIC_ADDR")
    private String projSetPicAddr;

    //프로젝트 설명 사용여부
    @Column(nullable = true, length = 1, name = "PROJ_SET_USE_YN")
    private String ProjSetUseYn;
}
