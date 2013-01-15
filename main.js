function reload(ctrl){
	var master = "#pinterest";
	//$(master).masonry('reload');
	$(master).masonry('destroy');load(ctrl);
}
function load(ctrl){
		
		try{
			$(master).masonry('destroy');
		}catch(e){}
		var content = "";
		var master = "#pinterest";
		var img1 = "stacks1.png";
		var img2 = "stacks2.png";
		var img3 = "stacks3.png";
		//alert(ctrl)
		switch(ctrl){
			case 2:
			case "2":
					img1 = "stacks3.png";
					img2 = "stacks2.png";
					img3 = "stacks1.png";
					break;
			case 3:
			case "3":
					img1 = "stacks2.png";
					img2 = "stacks1.png";
					img3 = "stacks3.png";
					break;
			case 4:
			case "4":
					img1 = "stacks3.png";
					img2 = "stacks1.png";
					img3 = "stacks2.png";
					break;
		}
		for(var i=1;i<9;i++){
			content += "<div class='item'>";
				if(i%3==0)
					content += "<img style='width:250px;height:350px;' src='../assets/img/triplepulse/"+img1+"'>";
				else if(i%2==0)
					content += "<img style='width:350px;height:250px;' src='../assets/img/triplepulse/"+img2+"'>";
				else
					content += "<img style='width:250px;height:250px;' src='../assets/img/triplepulse/"+img3+"'>";
			content += "</div>";
		}
		$(master).empty().append(content);
		$("div[id^='mason']").removeClass("btn-warning");
		$("#mason"+ctrl).addClass("btn-warning");
		$(master).masonry(
			{
  				itemSelector: '.item',
  				columnWidth: 10,
  				isAnimated:true,
  				animationOptions: {
    				duration: 750,
    				easing: 'linear',
    				queue: false
  				}
			}
		);
}
function loadGame(currentQus){
	var newQus = "";
	var newOpts = "";
	var numOpts = 2;
	var newQusNum = currentQus+1;
	var clas="span4";
	var ticks = "<span style='margin-right:70px;'><img src='../assets/img/triplepulse/tick.png'></span>";
	switch(newQusNum){
		case 5:
			newQus = "Monthly Plan";
			numOpts = 1;
			clas="span2";
			break;		
		case 4:
			newQus = "Credit Card Info";
			numOpts = 1;
			clas="span2";
			break;		
		case 3:
			newQus = "Subscription Structure";
			numOpts = 4;
			clas="span2";
			break;		
		case 2:
			newQus = "What is your experience level?";
			numOpts = 3;
			clas="span3";
			break;		
		case 1:
			newQus = "What are you training for?";
			numOpts = 2;
			clas="span4";
				break;
		default:
			currentQus = 0;
			newQusNum = 1;
			newQus = "What are you training for?";
			numOpts = 2;
			clas="span4";
			$("#tickMark").empty();
			ticks = "";
			break;
	}
	// Change Status Title highlight
	$("#statusTitle > .btn-warning").removeClass("btn-warning");
	$("#status"+newQusNum).addClass("btn").addClass("btn-warning");
	for(var i=1;i<=numOpts;i++){
		newOpts += 	"<span class='"+clas+"' onClick='javascript:loadGame("+newQusNum+");'>"+
	          		"<img src='../assets/img/triplepulse/game/qus"+newQusNum+"opt"+i+".png'>"+
	        		"</span>";
    }
    
    
	$("#currentQuestion > .qusTitle").empty().append(newQus);
	$("#qusOptions").empty().append(newOpts);
	$("#tickMark").append(ticks);
}

function lightBox(ctrl){
	
}