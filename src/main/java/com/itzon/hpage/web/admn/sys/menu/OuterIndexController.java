package com.itzon.hpage.web.admn.sys.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OuterIndexController {
    @GetMapping("/SYS/OUTER")
    public String getMenuConfigPage() {
        return "/views/sys/outer/outer";
    }
}

