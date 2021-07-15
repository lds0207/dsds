package com.itzon.hpage.web.admn.sys.grid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GridIndexController {
    @GetMapping("/SYS/GRID")
    public String getGridConfigPage() {
        return "/views/sys/grid/grid";
    }
}
