package kr.beauty.common.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.beauty.common.dto.CdDtlDTO;

@Mapper
public interface ICommonDAO {

	public List<CdDtlDTO> listCdDtl(HashMap<String, Object> paramMap);

	
	
}
