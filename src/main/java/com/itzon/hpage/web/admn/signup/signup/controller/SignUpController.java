package com.itzon.hpage.web.admn.signup.signup.controller;

import com.itzon.hpage.common.dto.UserSaveRequestDto;
import com.itzon.hpage.domain.entity.TbUserInfo;
import com.itzon.hpage.web.admn.signup.signup.service.SignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class SignUpController {

    private final SignUpService signUpService;


    @PostMapping("/api/signup/save")
    public void signUpUserInfo(@RequestBody UserSaveRequestDto userSaveRequestDto) {


        signUpService.signUpUserInfo(userSaveRequestDto);
    }

}
