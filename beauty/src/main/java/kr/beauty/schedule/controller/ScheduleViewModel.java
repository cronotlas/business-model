package kr.beauty.schedule.controller;

import java.util.List;

import kr.beauty.common.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ScheduleViewModel {

	private List<UserDTO> listUser;	
	
}
