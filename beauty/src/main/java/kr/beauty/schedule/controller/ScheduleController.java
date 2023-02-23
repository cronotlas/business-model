package kr.beauty.schedule.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.beauty.common.dto.UserDTO;
import kr.beauty.main.MainViewModel;
import kr.beauty.main.service.IMainService;

@Controller
public class ScheduleController {
	
	@Autowired
	private IMainService mainService;

	@RequestMapping(value="/schedule/init",method=RequestMethod.POST)
	public @ResponseBody ScheduleViewModel listInfoActive(@RequestBody ScheduleViewModel vm,Model model)throws Exception{
		
		vm.setListUser(mainService.listUser());
		return vm;
	}
}
