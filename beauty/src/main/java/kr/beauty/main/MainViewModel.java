package kr.beauty.main;

import java.util.List;

import kr.beauty.common.dto.UserDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MainViewModel {

	private List<UserDTO> listInfo;	
	
}
