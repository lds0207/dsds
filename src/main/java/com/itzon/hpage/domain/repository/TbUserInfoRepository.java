package com.itzon.hpage.domain.repository;

import com.itzon.hpage.domain.entity.TbUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TbUserInfoRepository extends JpaRepository<TbUserInfo, Long> {
    Optional<TbUserInfo> findByUserId(String userId);
}
