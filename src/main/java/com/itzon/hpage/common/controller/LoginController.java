package com.itzon.hpage.common.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
public class LoginController {

    /*@PostMapping("/login")
    public String loginProcess() {
        System.out.println("test");
        return "1";
    }*/
/*    @PostMapping("/loginView")
    public String LoginP(Model model, HttpServletRequest, HttpServletResponse response){
        System.out.println(request.getAttribute("loginFailMsg"));
        model.addAttribute("exception", request.getAttribute("loginFailMsg"));

        return "views/login/login";
    }*/

}



