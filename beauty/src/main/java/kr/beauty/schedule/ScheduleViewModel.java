package kr.beauty.schedule;

import java.util.List;

import kr.beauty.common.CommonViewModel;
import kr.beauty.common.dto.CdDtlDTO;
import kr.beauty.common.dto.UserDTO;
import kr.beauty.schedule.dto.ScheduleDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ScheduleViewModel extends CommonViewModel {

	private List<UserDTO> listUser;
	private List<ScheduleDTO> listSchedule;	
	private ScheduleDTO detailSchedule;
	private List<CdDtlDTO> listCdDtl;
	
}
