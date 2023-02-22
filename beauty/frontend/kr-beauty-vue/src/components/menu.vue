<template>
	<div class="br-sideleft overflow-y-auto">
    <label class="sidebar-label pd-x-10 mg-t-20 op-3">Navigation</label>
    <ul class="br-sideleft-menu">
      <li class="br-menu-item">
        <a href="/" class="br-menu-link" :class="{'active':selMenu=='DASHBOARD'}">
          <span class="fa-fw select-all fas"></span>
          <span class="menu-item-label">Dashboard</span>
        </a>
      </li>
      <li class="br-menu-item">
        <a href="#" class="br-menu-link with-sub" :class="{'active show-sub':selMenu=='USER'}">
          <span class="fa-fw select-all fas"></span>
          <span class="menu-item-label">고객관리</span>
        </a>
        <ul class="br-menu-sub">
          <li class="sub-item"><a href="/user" class="sub-link" :class="{'active':selMenu=='USER'}">고객리스트</a></li>
          <li class="sub-item"><a href="alerts.html" class="sub-link">접속현황</a></li>
        </ul>
      </li>
      <li class="br-menu-item">
        <a href="#" class="br-menu-link with-sub" :class="{'active show-sub':selMenu=='SCHEDULE'}">
          <span class="fa-fw select-all fas"></span>
          <span class="menu-item-label">예약관리</span>
        </a>
        <ul class="br-menu-sub">
          <li class="sub-item"><a href="/schedule" class="sub-link" :class="{'active':selMenu=='SCHEDULE'}">현황</a></li>
        </ul>
      </li>
      <li class="br-menu-item">
        <a href="#" class="br-menu-link with-sub" :class="{'active show-sub':selMenu=='PAY'}">
          <span class="fa-fw select-all fas"></span>
          <span class="menu-item-label">매출관리</span>
        </a>
        <ul class="br-menu-sub">
          <li class="sub-item"><a href="/pay" class="sub-link" :class="{'active':selMenu=='PAY'}">매출현황</a></li>
          <li class="sub-item"><a href="chart-flot.html" class="sub-link">회원권</a></li>
        </ul>
      </li>
      <li class="br-menu-item">
        <a href="#" class="br-menu-link with-sub" :class="{'active show-sub':selMenu=='PRODUCT'}">
          <span class="fa-fw select-all fas"></span>
          <span class="menu-item-label">제품관리</span>
        </a>
        <ul class="br-menu-sub">
          <li class="sub-item"><a href="/product" class="sub-link" :class="{'active':selMenu=='PRODUCT'}">제품리스트</a></li>
        </ul>
      </li>
      <li class="br-menu-item">
        <a href="#" class="br-menu-link with-sub" :class="{'active show-sub':selMenu=='SMS'}">
          <span class="fa-fw select-all fas"></span>
          <span class="menu-item-label">SMS 관리</span>
        </a>
        <ul class="br-menu-sub">
          <li class="sub-item"><a href="/sms" class="sub-link" :class="{'active':selMenu=='SMS'}">SMS발신리스트</a></li>
        </ul>
      </li>
    </ul><!-- br-sideleft-menu -->

    <label class="sidebar-label pd-x-10 mg-t-25 mg-b-20 tx-info">Information Summary</label>

    <div class="info-list">
      <div class="info-list-item">
        <div>
          <p class="info-list-label">Memory Usage</p>
          <h5 class="info-list-amount">32.3%</h5>
        </div>
        <span class="peity-bar" data-peity='{ "fill": ["#336490"], "height": 35, "width": 60 }'>8,6,5,9,8,4,9,3,5,9</span>
      </div><!-- info-list-item -->

      <div class="info-list-item">
        <div>
          <p class="info-list-label">CPU Usage</p>
          <h5 class="info-list-amount">140.05</h5>
        </div>
        <span class="peity-bar" data-peity='{ "fill": ["#1C7973"], "height": 35, "width": 60 }'>4,3,5,7,12,10,4,5,11,7</span>
      </div><!-- info-list-item -->

      <div class="info-list-item">
        <div>
          <p class="info-list-label">Disk Usage</p>
          <h5 class="info-list-amount">82.02%</h5>
        </div>
        <span class="peity-bar" data-peity='{ "fill": ["#8E4246"], "height": 35, "width": 60 }'>1,2,1,3,2,10,4,12,7</span>
      </div><!-- info-list-item -->

      <div class="info-list-item">
        <div>
          <p class="info-list-label">Daily Traffic</p>
          <h5 class="info-list-amount">62,201</h5>
        </div>
        <span class="peity-bar" data-peity='{ "fill": ["#9C7846"], "height": 35, "width": 60 }'>3,12,7,9,2,3,4,5,2</span>
      </div><!-- info-list-item -->
    </div><!-- info-list -->

    <br>
  </div><!-- br-sideleft -->
</template>

<script>
  export default {
    name: 'global-menu',
    data () {
      return {
        selMenu: "DASHBOARD",
      }
    }
    , mounted: function () {
        console.log("globalMenu");
				pageLoad(this);
      try {
        
      } catch (e) {
        console.log(e);
      }
    },
    methods: {
      showTitle () {
        this.title = 'Global Component!!'
      }
			,fnGetInit: function(paramMenu){
				console.log(paramMenu);
				let vm = this;
				vm.selMenu = paramMenu;
			}
    }
  }
</script>