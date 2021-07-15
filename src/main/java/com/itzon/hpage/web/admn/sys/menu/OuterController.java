package com.itzon.hpage.web.admn.sys.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OuterController {
    @GetMapping("/SYS/OUTER/PRODUCT")
    public String getMenuConfigPage() {
        return "/views/sys/outer/product";
    }
}

