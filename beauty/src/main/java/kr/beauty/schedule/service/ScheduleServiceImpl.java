package kr.beauty.schedule.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.beauty.common.dto.UserDTO;
import kr.beauty.main.dao.IMainDAO;
import kr.beauty.schedule.dao.IScheduleDAO;
import kr.beauty.schedule.dto.ScheduleDTO;

@Service("scheduleService")
public class ScheduleServiceImpl implements IScheduleService {
	
	@Autowired
	private IScheduleDAO scheduleDAO;

	@Override
	public List<ScheduleDTO> list() {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();		
		return scheduleDAO.list(paramMap);
	}

	@Override
	public int create(ScheduleDTO detailSchedule) {
		// TODO Auto-generated method stub
		return scheduleDAO.create(detailSchedule);
	}


	
}
