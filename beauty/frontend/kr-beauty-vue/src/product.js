import Vue from 'vue'
import Axios from 'axios'

new Vue({
	el: '#scope-product',
	data: function() {
		return {
			viewModel: {
				listUser:[],
				paramT : 'sss',
			}
		}
	}
	,mounted: function() {
		console.log("mounted [product]");
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