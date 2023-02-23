package kr.beauty.common.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CommonDTO {
	
	protected Date create_date;
	protected String use_yn;
	protected String create_user_id;
	protected String create_user_name;
	protected Date update_date;
	protected String update_user_id;

}
