package kr.beauty.common.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CdDtlDTO extends CommonDTO {
	
	private String dtl_code;
	private String dtl_title;
	private String grp_code;
	private int sort_num;

}
