package com.itzon.hpage.web.cust.sample;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SAMPIndexController {
    @GetMapping("/sample")
    public String sampleIndex() {
        return "/views/sample/sampleIndex";
    }
}
