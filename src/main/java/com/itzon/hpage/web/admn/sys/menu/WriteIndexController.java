package com.itzon.hpage.web.admn.sys.menu;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WriteIndexController {
    @GetMapping("/SYS/write")
    public String getMenuConfigPage() {
        return "/views/board/write";
    }
}
