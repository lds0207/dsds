package com.itzon.hpage.web.admn.sys.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OuterDetailController {
    @GetMapping("/SYS/OUTER/DETAIL")
    public String getMenuConfigPage() {
        return "/views/sys/outer/detail";
    }
}

