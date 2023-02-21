export default{
	fnPrintDate: function(_date){
		let _month=_date.getMonth();
		_month="0"+(_month+1);
		let _day="0"+_date.getDate();
		return _date.getFullYear()+"-"+_month.substring(_month.length-2,_month.length)+"-"+_day.substring(_day.length-2,_day.length);
	}
	,fnPrintDate2: function(_date){
		let _month=_date.getMonth();
		_month="0"+(_month+1);
		let _day="0"+_date.getDate();
		return _date.getFullYear()+_month.substring(_month.length-2,_month.length)+_day.substring(_day.length-2,_day.length);
	}
	,fnToday:function(){
		var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
		var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // utc 표준시 도출
		var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
		var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

		let _month=today.getMonth();
		_month="0"+(_month+1);
		let _day="0"+today.getDate();
		return today.getFullYear()+"-"+_month.substring(_month.length-2,_month.length)+"-"+_day.substring(_day.length-2,_day.length);
	}
	,fnPrintMonth: function(_date){
		let _month=_date.getMonth();
		_month="0"+(_month+1);
		return _date.getFullYear()+"-"+_month.substring(_month.length-2,_month.length);
	}
	,fnPrintOnlyYear: function(_date){
		return _date.getFullYear();
	}
	,fnPrintOnlyMonth: function(_date){
		let _month=_date.getMonth();
		return _month+1;
	}
	,fnPrintOnlyHourMin: function(_date){
		let dt = new Date(_date);
		let hh=dt.getHours();
		let min=dt.getMinutes();
		hh=hh<10?"0"+hh:hh;
		min=min<10?"0"+min:min;
		return hh+":"+min;
	}
	,fnPrintDateByNum: function(_date){
		if(_date!=null && _date!=""){
			let year=_date.substring(0,4);
			let month=_date.substring(4,6);
			let day=_date.substring(6,8);
			return year+"-"+month+"-"+day;
		}
		return "";
	}
	,fnConvertStrDate: function(str,exp){
		let year;
		let month;
		let day;
		if(exp == null){
			year = str.substring(0,4);
			month = str.substring(4,6);
			day = str.substring(6,8);  
		}else{
			str=str.split(exp);
			year = str[0];
			month = str[1];
			day = str[2];  
		}
		return new Date(year,month,day);
	}
	,fnConvertDateStr: function(paramDate,exp){
		let _date = new Date(paramDate);
		let month = _date.getMonth() + 1;
		let day = _date.getDate();
		let year = _date.getFullYear();
		let _month = month < 10 ? "0"+ month: month;
		let _day = day < 10 ? "0"+ day: day;
		if(exp == null){
			return year+ "/"+ _month+ "/" + _day;
		}else{
			return year+ exp+ _month+ exp + _day;
		}
	}
	,fnOnFileDownload:function(seq){
		window.location='/file/download/'+seq;
	}
	,fnConvertDateTimeStr : function(_date,exp){
		if(_date==null){
			return '';
		}		
		let dt = new Date(_date);		
		let month = dt.getMonth() + 1;
		let day = dt.getDate();
		let year = dt.getFullYear();
		let hh=dt.getHours();
		let min=dt.getMinutes();
		let ss=dt.getSeconds();
		day=day<10?"0"+day:day;
		hh=hh<10?"0"+hh:hh;
		min=min<10?"0"+min:min;
		ss=ss<10?"0"+ss:ss;
		let _month = month < 10 ? "0"+ month: month;
		if(exp == null){
			return year+ "/"+ _month+ "/" + day+" "+hh+":"+min+":"+ss;
		}else{
			return year+ exp+ _month+ exp + day+" "+hh+":"+min+":"+ss;
		}
	}
	,numberWithCommas:function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	/* ,async excelDown(paramList) {
		const xlsx = require('xlsx');
		// 엑셀 파일 생성
		const book = xlsx.utils.book_new();

		// data get > 실 개발시 api 호출
		const fruitDataByAoa = await this.getFruitDataByAoa(paramList);
		const fruitDataByJson = await this.getFruitDataByJson(paramList);

		// sheet 생성 - aoa_to_sheet 방식
		const worksheetByAoa = xlsx.utils.aoa_to_sheet(fruitDataByAoa);

		// sheet 생성 - json_to_sheet 방식
		const worksheetByJson = xlsx.utils.json_to_sheet(fruitDataByJson);

		// 엑셀 파일에 sheet set(엑셀파일, 시트데이터, 시트명)
		xlsx.utils.book_append_sheet(book, worksheetByAoa, 'aoa');
		xlsx.utils.book_append_sheet(book, worksheetByJson, 'json');

		// 엑셀 다운로드
		xlsx.writeFile(book, 'fruit.xlsx');
	},
	// aoa는 행열 데이터를 엑셀과 동일하게 get
	getFruitDataByAoa(paramList) {
		let arr = [];
		arr.push(['관측일시', '1분 평균 풍향', '1분 평균 풍속', '1분 평균 습도']);
		for(var i=0;i<paramList.length;i++){
			arr.push([paramList[i].tm, paramList[i].wd, paramList[i].ws, paramList[i].ta]);
		}
		return arr;
	},
	getFruitDataByJson(paramList) {
		let arr = [];
		arr.push({ 이름: '바나나', 칼로리: 159, 지방: 6.0, 탄수화물: 24, 단백질: 4.0, 철분: '1' });
		arr.push({ 이름: '사과', 칼로리: 237, 지방: 9.0, 탄수화물: 37, 단백질: 2.3, 철분: '4' });
		arr.push({ 이름: '오렌지', 칼로리: 78, 지방: 1.2, 탄수화물: 45, 단백질: 1.1, 철분: '3.3' });
		return arr;
	} */

}