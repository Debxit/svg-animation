$(document).ready(function(){



if($(window).width() > 785){

$(".fancybox").fancybox();

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave' //onEnter, onCenter
    }
})


	function pathPrepare (el) {
		var lineLength;
		$.each(el , function( i, val ) {
		
			lineLength = val.pathLength;
		 	 lineLength = $(val)[0].getTotalLength();
			 $(val).css("stroke-dasharray", lineLength);
			 $(val).css("stroke-dashoffset", lineLength);
			
		});
			
		
	}

	var lines = $('path[id]');

	// prepare SVG

	pathPrepare(lines);


 new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200})
						.setPin("#one", {pushFollowers:true})		
					//	.addIndicators() 			
						.addTo(controller);


	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to('#line1', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, tweenChanges: true})
					.setTween(tween)		
				//	.addIndicators() 			
					.addTo(controller);

/********************************************************/

 // new ScrollMagic.Scene({triggerElement: "#trigger2", duration:700})
	// 					.setPin("#two", {pushFollowers:true})		
	// 			//		.addIndicators() 			
	// 					.addTo(controller);

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to('#second_line1', 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#second_line2', 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		.add(TweenMax.to('#second_line3', 1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		//.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);	// change color during the whole thing

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger1",offset:400, duration: 500, tweenChanges: false})
					.setTween(tween)		
				//	.addIndicators() 			
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
	// new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 500})
	// 				.setPin("#three .wrap", {pushFollowers:true})	
	// 				.addTo(controller);
					
	new ScrollMagic.Scene({triggerElement: ".any-spec", duration: 400, tweenChanges: true})
					.setTween(tween1)							
			//		.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".any-spec", duration: 400, tweenChanges: true})
					.setTween(tween2)							
			//		.addIndicators() 			
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".any-spec", duration: 400, tweenChanges: true})
					.setTween(tween3)							
			//		.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".any-spec", duration: 400, tweenChanges: true})
					.setTween(tween4)							
			//		.addIndicators() 			
					.addTo(controller);



	new ScrollMagic.Scene({triggerElement: ".any-spec",offset:50, duration: 300, tweenChanges: true})
					.setTween(tween5)							
			//		.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".any-spec",offset:55, duration: 300, tweenChanges: true})
					.setTween(tween6)							
			//		.addIndicators() 			
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".any-spec",offset:50, duration: 320, tweenChanges: true})
					.setTween(tween7)							
			//		.addIndicators() 			
					.addTo(controller);
	 // new ScrollMagic.Scene({triggerElement: "#trigger4", duration:700})
		// .setPin("#three .fixed-part", {pushFollowers:false})				
		// .addTo(controller);
		
			new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:5, duration:700, tweenChanges: true})
					.setTween(tween8)							
				//	.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part", duration: 700, tweenChanges: true})
					.setTween(tween9)	
					.on("enter", function () {
						// reset style
						$(".work-block.1").addClass( "green");// add class toggle
					})
					.on("leave", function () {						// reset style
						$(".work-block.1").removeClass( "green");
					})					
				//	.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:15, duration: 700, tweenChanges: true})
					.setTween(tween10)							
				//	.addIndicators() 			
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:10, duration:700, tweenChanges: true})
					.setTween(tween11)							
				//	.addIndicators() 			
					.addTo(controller);
					
	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:90})
					.on("enter", function () {
						// reset style
						$(".work-block.2").addClass( "green");// add class toggle
					})
					.on("leave", function () {
						// reset style
						$(".work-block.2").removeClass( "green");
					})
				//	.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:200})
					.on("enter", function () {
						// reset style
						$(".work-block.3").addClass( "green");// add class toggle
					})
					.on("leave", function () {
						// reset style
						$(".work-block.3").removeClass( "green");
					})
				//	.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .fixed-part",offset:310})
					.on("enter", function () {
						// reset style
						$(".work-block.4").addClass( "green");// add class toggle
					})
					.on("leave", function () {
						// reset style
						$(".work-block.4").removeClass( "green");
					})
				//	.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".more-spec", duration:300})
						.setPin(".more-spec", {pushFollowers:true})	
					//	.addIndicators() 			
						.addTo(controller);

	var tween10 = new TimelineMax()
		.add(TweenMax.to(".more-spec .intro.first",0.1, { transform: "translateY(-240px)"})) 
		.add(TweenMax.to(".more-spec .intro.second",0.1, { transform: "translateY(-180px"}))	

	new ScrollMagic.Scene({triggerElement: ".more-spec",offset:50, duration:10})
						.setTween(tween10)
					//	.addIndicators() 			
						.addTo(controller);


	var notebook	= new TimelineMax()
		.add(TweenMax.to('#notebook1', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#notebook2', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to('#notebook3', 0.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 


	new ScrollMagic.Scene({triggerElement: "section#four", duration:600})
							.setPin("#four", {pushFollowers:true})		
							.setTween(notebook)
							.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "section#four", duration:400})						
							.setTween(notebook)	
							.addTo(controller);


	var tween11 = new TimelineMax()
			.add(TweenMax.to(".fisrt-line-fill",0.1, { width: "100%"})) 
			.add(TweenMax.to(".notebook img",0.1, {opacity: "1"})) 
			.add(TweenMax.to(".notebook .price",0.1, {opacity: "1"}))
			.add(TweenMax.to(".notebook .text",0.1, {opacity: "1"}))

	new ScrollMagic.Scene({triggerElement: "section#four", duration:100})
							.setTween(tween11)				
							.addTo(controller);


	var tween11_1 = new TimelineMax()
	.add(TweenMax.to(".second-line-fill1",0.2, {  width: "25%"}))
			
		

	new ScrollMagic.Scene({triggerElement: "section#four",offset:170, duration:100})
						.setTween(tween11_1)						
						.addIndicators() 
						.on("enter", function () {							
							$(".notebook .price .first").removeClass( "hidden");
							$(".notebook .text .first").removeClass( "hidden");
						})
						.on("leave", function () {
							$(".notebook .price .first").addClass( "hidden");
							$(".notebook .text .first").addClass( "hidden");
						})			
						.addTo(controller);



	var tween11_2 = new TimelineMax()
	.add(TweenMax.to(".circle1",0.4, { background: "#EC6D61"}))
	.add(TweenMax.to(".second-line-fill2",0.1, {  width: "25%"}))
			


	new ScrollMagic.Scene({triggerElement: "section#four",offset:270, duration:100})
							.setTween(tween11_2)
							.on("enter", function () {							
								$(".notebook .price .second").removeClass( "hidden");
								$(".notebook .text .second").removeClass( "hidden");
							})
							.on("leave", function () {
								$(".notebook .price .second").addClass( "hidden");
								$(".notebook .text .second").addClass( "hidden");
							})	
							.addIndicators() 			
							.addTo(controller);

	var tween11_3 = new TimelineMax()
		.add(TweenMax.to(".circle2",0.4, { background: "#EC6D61"}))
		.add(TweenMax.to(".second-line-fill3",0.1, {  width: "25%"}))	
				


	new ScrollMagic.Scene({triggerElement: "section#four",offset:370, duration:200})
							.setTween(tween11_3)
							.on("enter", function () {
								$(".notebook .price .third").removeClass( "hidden");
								$(".notebook .text .third").removeClass( "hidden");
							})
							.on("leave", function () {
								$(".notebook .price .third").addClass( "hidden");
								$(".notebook .text .third").addClass( "hidden");
							})		
							.addIndicators() 			
							.addTo(controller);

	

	var tween11_4 = new TimelineMax()
	.add(TweenMax.to(".circle3",0.4, { background: "#EC6D61"}))
	.add(TweenMax.to(".second-line-fill4",0.1, {  width: "25%"}))	



	new ScrollMagic.Scene({triggerElement: "section#four",offset:570, duration:200})
							.setTween(tween11_4)
							.on("enter", function () {
								$(".notebook .price .fourth").removeClass( "hidden");
								$(".notebook .text .fourth").removeClass( "hidden");
							})
							.on("leave", function () {
								$(".notebook .price .fourth").addClass( "hidden");
								$(".notebook .text .fourth").addClass( "hidden");
							})						
							.addIndicators() 			
							.addTo(controller);

		}


	else {


		// init
		var controller = new ScrollMagic.Controller();

	
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				triggerHook: "onLeave",
				duration: "200%"
			})
			.setPin("#one", {pushFollowers:false})
			// .setTween(wipeAnimation)
			.addTo(controller);

		new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: "onLeave",
				duration: "200%"
			})
			.setPin("#two", {pushFollowers:false})
			// .setTween(wipeAnimation)
			.addTo(controller);

		new ScrollMagic.Scene({
				triggerElement: "#four",
				triggerHook: "onLeave",
				duration: "200%"
			})
			.setPin("#four", {pushFollowers:false})
			// .setTween(wipeAnimation)
			.addTo(controller);



		}

});