package kr.beauty.common.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.beauty.common.dao.ICommonDAO;
import kr.beauty.common.dto.CdDtlDTO;

@Service("commonService")
public class CommonServiceImpl implements ICommonService {
	
	@Autowired
	private ICommonDAO commonDAO;

	@Override
	public List<CdDtlDTO> listCdDtl(String paramGrpCd) {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("paramGrpCd", paramGrpCd);
		return commonDAO.listCdDtl(paramMap);
	}


	
}
