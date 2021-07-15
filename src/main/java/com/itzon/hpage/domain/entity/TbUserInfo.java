package com.itzon.hpage.domain.entity;

import lombok.Builder;
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
@Table(name = "TB_USER_INFO")
@Entity
public class TbUserInfo {
    @Id
    @Column(nullable = false, length = 40, name = "USER_ID")
    private String userId;

    @Column(nullable = false, length = 40, name = "USER_NM")
    private String userNm;

    @Column(nullable = false, length = 300, name = "USER_PW")
    private String userPw;

    @Column(nullable = false, length = 300, name = "USER_PW_PRE")
    private String userPwPre;

    @Column(nullable = false, length = 1, name = "USER_USE_YN")
    private String userUseYn;

    @Builder
    public TbUserInfo(
            String userId
            ,String userNm
            ,String userPw
            ,String userPwPre
            ,String userUseYn
    ) {
        this.userId = userId;
        this.userNm = userNm;
        this.userPw = userPw;
        this.userPwPre = userPwPre;
        this.userUseYn = userUseYn;
    }
}
