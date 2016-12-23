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


	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	
	var $line1 = $("path#line1");
	var $second_line1 = $("path#second_line1");
	var $second_line2 = $("path#second_line2");
	var $second_line3 = $("path#second_line3");

	var $third_line1 = $("#three_first_line1");
	var $third_line2 = $("#three_first_line2");
	var $third_line3 = $("#three_first_line3");
	var $third_line4 = $("#three_first_line4");

	// prepare SVG
	pathPrepare($line1);

	pathPrepare($second_line1);
	pathPrepare($second_line2);
	pathPrepare($second_line3);

	pathPrepare($third_line1);
	pathPrepare($third_line2);
	pathPrepare($third_line3);
	pathPrepare($third_line4);

 new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
						.setPin("#one", {pushFollowers:true})		
						.addIndicators() 			
						.addTo(controller);


	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($line1, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		

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
		.add(TweenMax.to($second_line1, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to($second_line2, 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		.add(TweenMax.to($second_line3, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		//.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);	// change color during the whole thing

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 500, tweenChanges: true})
					.setTween(tween)		
					.addIndicators() 			
					.addTo(controller);




/********************************************************/



						// build tween
	var tween1 = new TimelineMax()
		.add(TweenMax.to($third_line1, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween2	= new TimelineMax()
		.add(TweenMax.to($third_line2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween3 = new TimelineMax()
		.add(TweenMax.to($third_line3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	var tween4	= new TimelineMax()
		.add(TweenMax.to($third_line4, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 600})
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
	/* new ScrollMagic.Scene({triggerElement: "#trigger4", duration:700})
		.setPin("#three .fixed-part", {pushFollowers:true})		
		.addIndicators({
		    colorStart: "rgba(255,255,255,0.5)",
		    colorEnd: "rgba(255,255,255,0.5)", 
		    colorTrigger : "rgba(255,255,255,1)",
		    name:name
		}) 			
		.addTo(controller);
*/

});