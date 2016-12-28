$(document).ready(function(){
/*
	// init controller
	var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave' //onEnter, onCenter
    }
})

	  $("section").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
  .addIndicators({
    colorStart: "rgba(255,255,255,0.5)",
    colorEnd: "rgba(255,255,255,0.5)", 
    colorTrigger : "rgba(255,255,255,1)",
    name:name
}) 
    .addTo(ctrl);
 
});
*/



var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave' //onEnter, onCenter
    }
})


	function pathPrepare (el) {
		var lineLength;
		$.each(el , function( i, val ) {
			console.log($(val));
			lineLength = val.pathLength;
			//console.log(lineLength);
		 	 lineLength = $(val)[0].getTotalLength();
			 $(val).css("stroke-dasharray", lineLength);
			 $(val).css("stroke-dashoffset", lineLength);
			 console.log(lineLength);
		});
			
		
	}

	var lines = $('path[id]');
	var second_line1 = $("path#second_line1");
	console.log(second_line1);


	// prepare SVG

	pathPrepare(lines);


 new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
						.setPin("#one", {pushFollowers:true})		
						.addIndicators() 			
						.addTo(controller);


	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to('#line1', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, tweenChanges: true})
					.setTween(tween)		
					.addIndicators() 			
					.addTo(controller);

/********************************************************/

 new ScrollMagic.Scene({triggerElement: "#trigger2", duration:700})
						.setPin("#two", {pushFollowers:true})		
						.addIndicators() 			
						.addTo(controller);

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to('#second_line1', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#second_line2', 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		.add(TweenMax.to('#second_line3', 1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		//.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);	// change color during the whole thing

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 500, tweenChanges: false})
					.setTween(tween)		
					.addIndicators() 			
					.addTo(controller);

/********************************************************/

						// build tween
	var tween1 = new TimelineMax()
		.add(TweenMax.to('#three_first_line1', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween2	= new TimelineMax()
		.add(TweenMax.to('#three_first_line2', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween3 = new TimelineMax()
		.add(TweenMax.to('#three_first_line3', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween4	= new TimelineMax()
		.add(TweenMax.to('#three_first_line4', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween5 = new TimelineMax()
		.add(TweenMax.to('#three_circle_line1', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween6	= new TimelineMax()
		.add(TweenMax.to('#three_circle_line2', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 

	var tween7	= new TimelineMax()
		.add(TweenMax.to('#three_circleIn_line9', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line5', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line1', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line11', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line7', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line3', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line10', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line6', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line2', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line12', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line8', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#three_circleIn_line4', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 


	var tween8 = new TimelineMax()
		.add(TweenMax.to('#three_lines_line1', 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween9	= new TimelineMax()
		.add(TweenMax.to('#three_lines_line2', 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween10 = new TimelineMax()
		.add(TweenMax.to('#three_lines_line3', 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween11	= new TimelineMax()
		.add(TweenMax.to('#three_lines_line4', 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 500})
					.setPin("#three .wrap", {pushFollowers:true})	
					.addTo(controller);
					
	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400, tweenChanges: true})
					.setTween(tween1)							
					.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400, tweenChanges: true})
					.setTween(tween2)							
					.addIndicators() 			
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400, tweenChanges: true})
					.setTween(tween3)							
					.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400, tweenChanges: true})
					.setTween(tween4)							
					.addIndicators() 			
					.addTo(controller);



	new ScrollMagic.Scene({triggerElement: "#trigger3",offset:50, duration: 300, tweenChanges: true})
					.setTween(tween5)							
					.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger3",offset:55, duration: 300, tweenChanges: true})
					.setTween(tween6)							
					.addIndicators() 			
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#trigger3",offset:50, duration: 320, tweenChanges: true})
					.setTween(tween7)							
					.addIndicators() 			
					.addTo(controller);
	 new ScrollMagic.Scene({triggerElement: "#trigger4", duration:800})
		.setPin("#three .fixed-part", {pushFollowers:false})		
		.addIndicators({
		    colorStart: "rgba(255,255,255,0.5)",
		    colorEnd: "rgba(255,255,255,0.5)", 
		    colorTrigger : "rgba(255,255,255,1)",
		    name:name
		}) 			
		.addTo(controller);
		
			new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:5, duration:700, tweenChanges: true})
					.setTween(tween8)							
					.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part", duration: 700, tweenChanges: true})
					.setTween(tween9)							
					.addIndicators() 			
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:15, duration: 700, tweenChanges: true})
					.setTween(tween10)							
					.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:10, duration:700, tweenChanges: true})
					.setTween(tween11)							
					.addIndicators() 			
					.addTo(controller);
					
	new ScrollMagic.Scene({triggerElement: "#green1",offset:-65})
					.on("enter", function () {
						// reset style
						$(".work-block.2").addClass( "green");// add class toggle
					})
					.on("leave", function () {
						// reset style
						$(".work-block.2").removeClass( "green");
					})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#green1",offset:10})
					.on("enter", function () {
						// reset style
						$(".work-block.3").addClass( "green");// add class toggle
					})
					.on("leave", function () {
						// reset style
						$(".work-block.3").removeClass( "green");
					})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#green1",offset:200})
					.on("enter", function () {
						// reset style
						$(".work-block.4").addClass( "green");// add class toggle
					})
					.on("leave", function () {
						// reset style
						$(".work-block.4").removeClass( "green");
					})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
					
});