package com.itzon.hpage.domain.repository;

import com.itzon.hpage.domain.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board,Long> {
}
