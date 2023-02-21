package kr.beauty.main.controller;

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
public class MainController {
	
	@Autowired
	private IMainService mainService;

	@RequestMapping(value="/main",method=RequestMethod.POST)
	public @ResponseBody MainViewModel listInfoActive(@RequestBody MainViewModel vm,Model model)throws Exception{
		
		vm.setListInfo(mainService.listUser());
		return vm;
	}
		
	@RequestMapping(value={"/"},method=RequestMethod.GET)
	public String mainView(MainViewModel vm,Model model){
		model.addAttribute("vm", vm);
		return "/view/dashboard";
	}
	
	@RequestMapping(value={"/pay"},method=RequestMethod.GET)
	public String payView(MainViewModel vm,Model model){
		model.addAttribute("vm", vm);
		return "/view/pay/pay";
	}
	
	@RequestMapping(value={"/product"},method=RequestMethod.GET)
	public String productView(MainViewModel vm,Model model){
		model.addAttribute("vm", vm);
		return "/view/product/product";
	}
	
	@RequestMapping(value={"/schedule"},method=RequestMethod.GET)
	public String scheduleView(MainViewModel vm,Model model){
		model.addAttribute("vm", vm);
		return "/view/schedule/schedule";
	}
	
	@RequestMapping(value={"/user"},method=RequestMethod.GET)
	public String updateContentBoardView(MainViewModel vm,Model model){
		model.addAttribute("vm", vm);
		return "/view/user/user";
	}
}
