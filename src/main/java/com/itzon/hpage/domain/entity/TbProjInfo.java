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
@Table(name = "TB_PROJ_INFO")
@Entity
public class TbProjInfo {

    //PK
    @Id
    @Column(nullable = false, length = 20, name = "PROJ_INFO_ID")
    private String projInfoId;

    //프로젝트 이름
    @Column(nullable = true, length = 20, name = "PROJ_INFO_NM")
    private String projInfoNm;

    //프로젝트 사용여부
    @Column(nullable = true, length = 1, name = "PROJ_INFO_USE_YN")
    private String ProjInfoUseYn;
}
