package com.itzon.hpage.web.admn.signup.signup.service;

import com.itzon.hpage.common.dto.UserSaveRequestDto;
import com.itzon.hpage.domain.entity.TbUserInfo;
import com.itzon.hpage.domain.repository.TbUserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@RequiredArgsConstructor
@Service
public class SignUpService {

    private final TbUserInfoRepository tbUserInfoRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void signUpUserInfo(UserSaveRequestDto userSaveRequestDto) {

        UserSaveRequestDto saveInfo = UserSaveRequestDto.builder()
                .userId(userSaveRequestDto.getUserId())
                .userNm(userSaveRequestDto.getUserNm())
                .userUseYn("Y")
                .userPw(passwordEncoder.encode(userSaveRequestDto.getUserPw()))
                .userPwPre(passwordEncoder.encode(userSaveRequestDto.getUserPw()))
                .build();

        TbUserInfo tbUserInfo = saveInfo.toEntity();
        tbUserInfoRepository.save(tbUserInfo);
    }

}
