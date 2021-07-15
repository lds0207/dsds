package com.itzon.hpage.common.dto;

import com.itzon.hpage.domain.entity.TbUserInfo;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class UserSaveRequestDto {
    private String userId;
    private String userNm;
    private String userPw;
    private String userPwPre;
    private String userUseYn;

    public TbUserInfo toEntity() {
        return TbUserInfo.builder()
                .userId(userId)
                .userNm(userNm)
                .userPw(userPw)
                .userPwPre(userPwPre)
                .userUseYn(userUseYn)
                .build();
    }

    @Builder
    public UserSaveRequestDto(
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

