package kr.beauty.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.beauty.common.dto.UserDTO;
import kr.beauty.main.dao.IMainDAO;

@Service("mainService")
public class MainServiceImpl implements IMainService {
	
	@Autowired
	private IMainDAO mainDAO;

	public List<UserDTO> listUser() {
		return mainDAO.listUser();
	}
	


	
}
