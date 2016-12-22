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

	// prepare SVG
	pathPrepare($line1);
	pathPrepare($second_line1);
	pathPrepare($second_line2);
	pathPrepare($second_line3);

 new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
						.setPin("#one", {pushFollowers:true})		
						.addIndicators({
						    colorStart: "rgba(255,255,255,0.5)",
						    colorEnd: "rgba(255,255,255,0.5)", 
						    colorTrigger : "rgba(255,255,255,1)",
						    name:name
						}) 			
						.addTo(controller);


	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($line1, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, tweenChanges: true})
					.setTween(tween)		
					.addIndicators({
					    colorStart: "rgba(255,255,255,0.5)",
					    colorEnd: "rgba(255,255,255,0.5)", 
					    colorTrigger : "rgba(255,255,255,1)",
					    name:name
					}) 			
					.addTo(controller);



/********************************************************/

 new ScrollMagic.Scene({triggerElement: "#trigger2", duration:700})
						.setPin("#two", {pushFollowers:true})		
						.addIndicators({
						    colorStart: "rgba(255,255,255,0.5)",
						    colorEnd: "rgba(255,255,255,0.5)", 
						    colorTrigger : "rgba(255,255,255,1)",
						    name:name
						}) 			
						.addTo(controller);


	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($second_line1, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
		.add(TweenMax.to($second_line2, 0.6, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		.add(TweenMax.to($second_line3, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))  
		//.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);	// change color during the whole thing

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400, tweenChanges: true})
					.setTween(tween)		
					.addIndicators({
					    colorStart: "rgba(255,255,255,0.5)",
					    colorEnd: "rgba(255,255,255,0.5)", 
					    colorTrigger : "rgba(255,255,255,1)",
					    name:name
					}) 			
					.addTo(controller);
});