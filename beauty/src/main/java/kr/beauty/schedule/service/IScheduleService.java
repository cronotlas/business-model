package kr.beauty.schedule.service;

import java.util.List;

import kr.beauty.common.dto.UserDTO;
import kr.beauty.schedule.dto.ScheduleDTO;


public interface IScheduleService {

	public List<ScheduleDTO> list();

	public int create(ScheduleDTO detailSchedule);
	

	

	
}
