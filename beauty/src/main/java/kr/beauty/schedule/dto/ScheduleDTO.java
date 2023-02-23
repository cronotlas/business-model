package kr.beauty.schedule.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ScheduleDTO {
	
	private String user_id;
	private String s_date;
	private String e_date;
	private String svc_type_cd;
	private String schedule_comment;

}
