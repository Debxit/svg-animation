/*

	Author: Nemets Yury;
	Site: www.sitehere.ru;

*/

function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
}

var $photoicon1 = $("path#photoicon1");
// var $photoicon2 = $("path#photoicon2");
// var $photoicon3 = $("path#photoicon3");

var $monitor1 = $("path#monitor1");
var $monitor2 = $("path#monitor2");
var $monitor3 = $("path#monitor3");
var $monitor4 = $("path#monitor4");

var $contract1 = $("path#contract1");
var $contract2 = $("path#contract2");
var $contract3 = $("path#contract3");
var $contract4 = $("path#contract4");
var $contract5 = $("path#contract5");
var $contract6 = $("path#contract6");

// подготовка SVG
pathPrepare($photoicon1);
// pathPrepare($photoicon2);
// pathPrepare($photoicon3);

pathPrepare($monitor1);
pathPrepare($monitor2);
pathPrepare($monitor3);
pathPrepare($monitor4);

pathPrepare($contract1);
pathPrepare($contract2);
pathPrepare($contract3);
pathPrepare($contract4);
pathPrepare($contract5);
pathPrepare($contract6);

// инициализация контроллера
var controller = new ScrollMagic.Controller();

// tween "Photoicon"
var tween = new TimelineMax()
	.add(TweenMax.to($photoicon1, 2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	// .add(TweenMax.to($photoicon2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	// .add(TweenMax.to($photoicon3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));

// tween "Monitor"
var tween2 = new TimelineMax()
	.add(TweenMax.to($monitor1, 2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to($monitor2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($monitor3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($monitor4, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($(".monitor path"), 2, {stroke: "#33629c", ease:Linear.easeNone}), 0);

// tween "Contract"
var tween3 = new TimelineMax()
	.add(TweenMax.to($contract1, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to($contract2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($contract3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($contract4, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($contract5, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($contract6, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));

// scene "Photoicon"
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, tweenChanges: true})
				.setTween(tween)
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);

// scene "Monitor"
var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400, tweenChanges: true})
				.setTween(tween2)
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);

// scene "Contract"
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 400, tweenChanges: true})
				.setTween(tween3)
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);