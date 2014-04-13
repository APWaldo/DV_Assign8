/**
 * @author Annie P Waldman
 */
/*
 * Adding roll over images for each photo.
 */
function MouseRollover1(MyImage) {
	MyImage.src = "images/2_8thAve-A2.jpg";
}

function MouseOut1(MyImage) {
	MyImage.src = "images/1_8thAve-A1.jpg";
}

function MouseRollover2(MyImage) {
	MyImage.src = "images/4_BowlingGreen2.jpg";
}

function MouseOut2(MyImage) {
	MyImage.src = "images/3_BowlingGreen1.jpg";
}

function MouseRollover3(MyImage) {
	MyImage.src = "images/6_delancy-2.jpg";
}

function MouseOut3(MyImage) {
	MyImage.src = "images/5_delancy-1.jpg";
}

function MouseRollover4(MyImage) {
	MyImage.src = "images/8_mottB-2.jpg";
}

function MouseOut4(MyImage) {
	MyImage.src = "images/7_mottB-1.jpg";
}

/*
 * Setting up which videos to play in the modal.
 */

var video1 = '<iframe width="480" height="360" src="http://www.youtube.com/embed/3TlsBxen50Y?html5=1" frameborder="0" allowfullscreen></iframe>';
var video2 = '<iframe width="560" height="315" src="http://www.youtube.com/embed/954L9MpfCEo?html5=1" frameborder="0" allowfullscreen></iframe>';
var video3 = '<iframe width="480" height="360" src="http://www.youtube.com/embed/6jB8ecT5lfA?html5=1" frameborder="0" allowfullscreen></iframe>';
var video4 = '<iframe width="560" height="315" src="http://www.youtube.com/embed/4m138USl6DY?html5=1" frameborder="0" allowfullscreen></iframe>';

$(document).ready(function() {
	setNav();
});

/*
 * Setting up the on click functions of the modals. 
 */

function setNav(){
	$(".1930").on("click", function(){
	$('#myModal1').modal();
	$(".modal-body").html(video1);
	$('#myModal1').on('hidden.bs.modal', function () {
    $('#myModal1 iframe').removeAttr('src');
})
})
$(".1900").on("click", function(){
	$('#myModal2').modal();
	$(".modal-body").html(video2);
	$('#myModal2').on('hidden.bs.modal', function () {
    $('#myModal2 iframe').removeAttr('src');
})
})
$(".1960_1").on("click", function(){
	$('#myModal3').modal();
	$(".modal-body").html(video3);
	$('#myModal3').on('hidden.bs.modal', function () {
    $('#myModal3 iframe').removeAttr('src');
})
})
$(".1960_2").on("click", function(){
	$('#myModal4').modal();
	$(".modal-body").html(video4);
	$('#myModal4').on('hidden.bs.modal', function () {
    $('#myModal4 iframe').removeAttr('src');
})
})


};



