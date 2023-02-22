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
			viewModel: {
				listUser:[],
			}
		}
	}
	,mounted: function() {
		console.log("mounted [schedule]");
		try {
			this.fnInit();
      
		} catch (e) {
			console.log(e);
		}
	}
	,methods: {
    fnInit: function() {
      let vm = this;
			document.addEventListener('DOMContentLoaded', function() {
				var calendarEl = document.getElementById('calendar2');
		
				vm.calendar = new FullCalendar.Calendar(calendarEl, {
					headerToolbar: {
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay'
					},
					initialDate: '2023-01-12',
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
					events: [
						{
							title: 'All Day Event',
							start: '2023-01-01'
						},
						{
							title: 'Long Event',
							start: '2023-01-07',
							end: '2023-01-10'
						},
						{
							groupId: 999,
							title: 'Repeating Event',
							start: '2023-01-09T16:00:00'
						},
						{
							groupId: 999,
							title: 'Repeating Event',
							start: '2023-01-16T16:00:00'
						},
						{
							title: 'Conference',
							start: '2023-01-11',
							end: '2023-01-13'
						},
						{
							title: 'Meeting',
							start: '2023-01-12T10:30:00',
							end: '2023-01-12T12:30:00'
						},
						{
							title: 'Lunch',
							start: '2023-01-12T12:00:00'
						},
						{
							title: 'Meeting',
							start: '2023-01-12T14:30:00'
						},
						{
							title: 'Happy Hour',
							start: '2023-01-12T17:30:00'
						},
						{
							title: 'Dinner',
							start: '2023-01-12T20:00:00'
						},
						{
							title: 'Birthday Party',
							start: '2023-01-13T07:00:00'
						},
						{
							title: 'Click for Google',
							url: 'http://google.com/',
							start: '2023-01-28'
						}
					]
				});
		
				vm.calendar.render();
			});

    }
  }
});