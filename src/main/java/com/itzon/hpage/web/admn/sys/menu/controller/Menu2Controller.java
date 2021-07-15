package com.itzon.hpage.web.admn.sys.menu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Menu2Controller {

    @GetMapping("/example")
    public String mainview(){
        return "views/mainview/mainview";
    }
}
