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

	//var $word = $("path#word");
	//var $dot = $("path#dot");
	var $line1 = $("polyline#line1");
	var $test = $("path#test");
	// prepare SVG
//	pathPrepare($word);
//	pathPrepare($dot);
	pathPrepare($test);

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
		//.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		//.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

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
		.add(TweenMax.to($test, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 300, tweenChanges: true})
					.setTween(tween)		
					.addIndicators({
					    colorStart: "rgba(255,255,255,0.5)",
					    colorEnd: "rgba(255,255,255,0.5)", 
					    colorTrigger : "rgba(255,255,255,1)",
					    name:name
					}) 			
					.addTo(controller);
});