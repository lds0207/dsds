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
@Table(name = "TB_MENU_INFO")
@Entity
public class TbMenuInfo {
    @Id
    @Column(nullable = false, length = 20, name = "MENU_ID")
    private String menuId;

    @Column(nullable = true, length = 20, name = "MENU_NM")
    private String menuNm;

    @Column(nullable = true, length = 20, name = "MENU_URL")
    private String menuUrl;

    @Column(nullable = true, length = 20, name = "MENU_UPPR_URL")
    private String menuUpprUrl;

    @Column(nullable = true, length = 20, name = "MENU_UPPR_ID")
    private String menuUpprId;

    @Column(nullable = true, length = 20, name = "MENU_LV")
    private String menuLv;

    @Column(nullable = true, length = 4, name = "MENU_ORD_NO")
    private Long menuOrdNo;

    @Column(nullable = true, length = 1, name = "MENU_PUB_YN")
    private String menuPubYn;

    @Column(nullable = true, length = 1, name = "MENU_USE_YN")
    private String menuUseYn;
}
