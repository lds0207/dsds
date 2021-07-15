package com.itzon.hpage.web.admn.sys.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TopIndexController {
    @GetMapping("/SYS/TOP")
    public String getMenuConfigPage() {
        return "/views/sys/top/top";
    }
}
