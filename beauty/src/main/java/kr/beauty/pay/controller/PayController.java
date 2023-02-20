package kr.beauty.pay.controller;

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
public class PayController {
	
	/*
	 * @Autowired private IMainService mainService;
	 */

	/*
	 * @RequestMapping(value="/main",method=RequestMethod.POST) public @ResponseBody
	 * MainViewModel listInfoActive(@RequestBody MainViewModel vm,Model model)throws
	 * Exception{
	 * 
	 * vm.setListInfo(mainService.listUser()); return vm; }
	 */
}
