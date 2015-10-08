if (!window.console) {
	window.console = {};
	window.console.log = function(){};
}
console.log('%c Ante geia! ', 'background: #f00; color: #fff; border-radius:3px;');
console.log('Giati eisai periergos');
$('.js_play_voice').click(function(e) {
	e.preventDefault();
	var audioName = $(this).attr('data-audio-name');
	if(!audioName) { return false; }
	var $audio = $("#tsoukalas-audio");
	$audio.attr('src', '/audio/' + audioName + '.mp3');
	var beepOne = $audio[0];
	beepOne.play();
});
