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
@Table(name = "TB_FOOT_INFO")
@Entity
public class TbFootInfo {
    @Id
    @Column(nullable = false, length = 20, name = "FOOT_ID")
    private String footId;

    @Column(nullable = true, length = 20, name = "FOOT_NM")
    private String footNm;

    @Column(nullable = true, length = 20, name = "FOOT_URL")
    private String footUrl;

    @Column(nullable = true, length = 20, name = "FOOT_UPPR_URL")
    private String footUpprUrl;

    @Column(nullable = true, length = 20, name = "FOOT_UPPR_ID")
    private String footUpprId;

    @Column(nullable = true, length = 20, name = "FOOT_LV")
    private String footLv;

    @Column(nullable = true, length = 4, name = "FOOT_ORD_NO")
    private Long footOrdNo;

    //로그인 안한 사용자 사용여부
    //로그인 안하고 사용가능시 Y 아니면 N
    @Column(nullable = true, length = 1, name = "FOOT_PUB_YN")
    private String footPubYn;

    @Column(nullable = true, length = 1, name = "FOOT_USE_YN")
    private String footUseYn;
}
