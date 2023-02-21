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
			viewModel: {
				listUser:[],
				paramT : 'sss',
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
      console.log("asdf");
			



			Axios.post("/main", {})
			.then(function(response) {
				let rs = response.data;
				console.log(rs.listInfo);
				vm.viewModel.listUser = rs.listInfo;
			}).catch(function(ex) {
				console.log(ex);
			}); 
    }
  }
});