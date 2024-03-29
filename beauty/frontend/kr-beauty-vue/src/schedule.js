import 'es6-promise/auto'
import Vue from 'vue'
import Axios from 'axios'
import Common from './components/common.js';
import GlobalMenu from './components/menu.vue'
import 'regenerator-runtime/runtime'

Vue.component(GlobalMenu.name, GlobalMenu);
Vue.component('common', Common);

new Vue({
	el: '#scope-schedule',
	data: function() {
		return {
			calendar:null,
			isOK:false,
			viewModel: {
				listUser:[],
				detailSchedule:{schedule_comment:'',svc_type_cd:'',user_id:''},
				listSvcTp:[],
				listSchedule:[],
			}
		}
	}
	,mounted: function() {
		console.log("mounted [schedule]");
		try {
			
      this.fnInitCalendat();
		} catch (e) {
			console.log(e);
		}
	}
	,methods: {
		fnInit: function(){
			let vm = this;
			Axios.post("/schedule/init", {})
			.then(function(response) {
				let rs = response.data;
				vm.viewModel.listUser = rs.listUser;
				vm.viewModel.listSvcTp = rs.listCdDtl;
				vm.fnSetCal(rs.listSchedule);
			}).catch(function(ex) {
				console.log(ex);
			});
		}
    ,fnInitCalendat: function() {
      let vm = this;
			document.addEventListener('DOMContentLoaded', function() {
				var calendarEl = document.getElementById('calendar2');
		
				vm.calendar = new FullCalendar.Calendar(calendarEl, {
					headerToolbar: {
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay'
					},
					locale: 'ko',
					//initialDate: '2023-01-12',
					navLinks: true, // can click day/week names to navigate views
					selectable: true,
					selectMirror: true,
					select: function(arg) {
						var title = prompt('Event Title:');
						if (title) {
							vm.calendar.addEvent({
								title: title,
								start: arg.start,
								end: arg.end,
								allDay: arg.allDay
							})
						}
						vm.calendar.unselect()
					},
					eventClick: function(arg) {
						if (confirm('Are you sure you want to delete this event?')) {
							arg.event.remove()
						}
					},
					editable: true,
					dayMaxEvents: true, // allow "more" link when too many events
					events: []
				});
		
				vm.calendar.render();
				vm.fnInit();
				
			});

    }
		,fnClickCreate:function(){
			let vm = this;
			vm.viewModel.detailSchedule.user_id = $("#userId").val();
			vm.viewModel.detailSchedule.svc_type_cd = $("#serviceType").val();


			var imsi =  $("#tpBasic").val().substring($("#tpBasic").val().length-2,$("#tpBasic").val().length);
var imsi2 =  $("#tpBasic").val().substring(0,$("#tpBasic").val().length-2);


let hh=parseInt(imsi2.split(':')[0]);
if(imsi=='오후'){
	hh=hh+12;
}
let addhh=0;
if(vm.viewModel.detailSchedule.svc_type_cd=='SVC_01'){
	addhh=hh+1;
}else if(vm.viewModel.detailSchedule.svc_type_cd=='SVC_01'){
	addhh=hh+12;
}else if(vm.viewModel.detailSchedule.svc_type_cd=='SVC_01'){
	addhh=hh+12;
}
hh =hh<10?"0"+hh:hh;
addhh =addhh<10?"0"+addhh:addhh;
let mi=parseInt(imsi2.split(':')[1]);

mi= mi<10?"0"+mi:mi;




			vm.viewModel.detailSchedule.s_date = $("#sDate").val()+'T'+hh+':'+mi+':00';//$("#sDate").val();
			vm.viewModel.detailSchedule.e_date = $("#sDate").val()+'T'+addhh+':'+mi+':00';//$("#tpBasic").val();

			Axios.post("/schedule/create", {detailSchedule:vm.viewModel.detailSchedule})
			.then(function(response) {
				let rs = response.data;
				if(rs.resultCount>0){
					vm.isOK = true;
					setTimeout(function() {
            vm.isOK=false
          }, 1000);
					vm.viewModel.detailSchedule={schedule_comment:'',svc_type_cd:'',user_id:''};
					$("#sDate").val('');
					$("#tpBasic").val('');
					$("#userId").val('').select2();
					$("#serviceType").val('').select2();
				}
			}).catch(function(ex) {
				console.log(ex);
			});

		}
		,fnSetCal:function(paramList){
			let vm = this;
			/* Axios.post()
			,then(function(response){
				let rs = response.data;
				console.log(rs.scheduleß);
			}); */
			for(let i=0;i<paramList.length;i++){
				var item = {
					title:paramList[i].user_id
					,start:paramList[i].s_date
					,end:paramList[i].e_date
				}
				vm.calendar.addEvent(item);
			}
			vm.calendar.render();
		}
  }
});