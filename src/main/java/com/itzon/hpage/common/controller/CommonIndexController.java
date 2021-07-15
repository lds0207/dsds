package com.itzon.hpage.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CommonIndexController {
    @GetMapping("/")
    public String getMainPage() {
        return "/views/main/main";
    }

    @GetMapping("/login")
    public String getLoginPage() {
        return "/views/login/login";
    }

    @GetMapping("/signup")
    public String getSignupPage() {
        return "/views/signup/signup";
    }
}
