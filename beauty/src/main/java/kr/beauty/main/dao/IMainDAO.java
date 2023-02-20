package kr.beauty.main.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.beauty.common.dto.UserDTO;

@Mapper
public interface IMainDAO {
	
	public List<UserDTO> listUser();

	
}
