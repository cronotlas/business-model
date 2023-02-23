package kr.beauty.schedule.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.beauty.common.dto.UserDTO;
import kr.beauty.schedule.dto.ScheduleDTO;

@Mapper
public interface IScheduleDAO {

	public List<ScheduleDTO> list(HashMap<String, Object> paramMap);

	public int create(ScheduleDTO detailSchedule);
	
	
}
