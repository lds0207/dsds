package com.itzon.hpage.web.admn.sys.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BestIndexController {
    @GetMapping("/SYS/BEST")
    public String getMenuConfigPage() {
        return "/views/sys/menu/best";
    }
}
