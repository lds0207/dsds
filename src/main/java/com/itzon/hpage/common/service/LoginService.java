package com.itzon.hpage.common.service;

import com.itzon.hpage.domain.entity.TbUserInfo;
import com.itzon.hpage.domain.repository.TbUserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LoginService implements UserDetailsService {
    private TbUserInfoRepository tbUserInfoRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        TbUserInfo userInfo = tbUserInfoRepository.findByUserId(username).orElseThrow(() -> new IllegalArgumentException("해당 아이디가 없습니다."));


        List<GrantedAuthority> authority = new ArrayList<>();

        authority.add(new SimpleGrantedAuthority("ADMIN"));
        return new User(userInfo.getUserId(), userInfo.getUserPw(), authority);
    }
}
