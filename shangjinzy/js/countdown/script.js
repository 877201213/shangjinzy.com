$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 8, 23),//月倒计时：11月21
		ts2 = new Date(2017, 8, 31),//周倒计时：10月28
		newYear = newYear2 = true;
	
//	if((new Date()) > ts){
//		// The new year is here! Count towards something else.
//		// Notice the *1000 at the end - time must be in milliseconds
//		ts = (new Date()).getTime() + 10*24*60*60*1000;
//		newYear = false;
//	}
	
//	if((new Date()) > ts2){
//		// The new year is here! Count towards something else.
//		// Notice the *1000 at the end - time must be in milliseconds
//		ts2 = (new Date()).getTime() + 7*24*60*60*1000;
//		newYear2 = false;
//	}
	$('#countdown1').countdown({
		timestamp	: ts,
		
		callback	: function(days, hours, minutes, seconds){
			
//			var message = "";
//			
//			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
//			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
//			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
//			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
//			if(newYear){
//				message += "left until the new year!";
//			}
//			else {
//				message += "left to 10 days from now!";
//			}
//			
//			note.html(message);
		}
	});
	
	$('#countdown2').countdown({
		timestamp	: ts2,
		callback	: function(days, hours, minutes, seconds){
			
//			var message = "";
//			
//			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
//			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
//			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
//			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
//			if(newYear2){
//				message += "left until the new year!";
//			}
//			else {
//				message += "left to 10 days from now!";
//			}
//			
//			note.html(message);
		}
	});
	
});
function weekClick() {
 	$('#month-table').attr('style','display:none');
	$('#week-table').attr('style','display:inline-table');
}
function monthClick() {
 	$('#week-table').attr('style','display:none');
	$('#month-table').attr('style','display:inline-table');
}
