(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = false,
		playlist = [
		{
title: 'Theme From TIGA',
artist: '迪迦BGM',
cover:'http://kibey-echo.b0.upaiyun.com/poster/2014/09/02/4b8098fce1088725.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/810b9d226cdcda2babacc5b24b1a599e609c8baa65c5a40bc699bfb8f2e397946358467c.mp3?1447777909',
ogg: ''
},
{
title: 'Inspired【推荐】',
artist: 'Mexikus',
cover: 'http://echo-image.qiniucdn.com/FmCsyFueYs9n1accI0jwNBJL0kmS',
mp3: 'http://api.itwusun.com/music/songurl/echo_320_1191949.mp3?sign=668ab9764e4bec71788df017b9dff706',
ogg: ''
},
{
title: '风居住的街道【推荐】',
artist: '矶村由纪子/坂下正夫',
cover: 'http://kibey-echo.b0.upaiyun.com/poster/2014/11/10/3f528087ec49de39.jpeg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/ec47416aeab57c9c026fdeca6b1099ecfcf9b3f8a953135fa271d0c1a71a0f1eb27eef59.mp3?1447574947',
ogg: ''
},
{
title: '地球之涙',
artist: 'V.K克',
cover: 'http://kibey-echo.b0.upaiyun.com/poster/2014/08/07/bf396c53b1abd0ba.png',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/64152d25aba32bb2dd12386123eebaf55825b9da3122ff36183ab2db570537353b141d4c.mp3?1448267521',
ogg: ''
},
{
title: '亞特蘭提斯之戀',
artist: 'V.K克',
cover: 'http://kibey-echo.b0.upaiyun.com/1b1ad96797a8ad339c48f21626a833b2.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/13fdc5577f8d1b2d0f5d3dbb616b9ed963de326ab47a4b0b19d8bba4ee6b5accdd7040b5.mp3?1448221542',
ogg: ''
},
{
title: 'いつも何度でも',
artist: '千里千寻结尾曲',
cover: 'http://7xik56.com2.z0.glb.qiniucdn.com/29e70e7b40ff46f62a7e40cb3cf74ad747533e24',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/5d1908dcc66ae28039f710bad7e0b0ec98f38803804c9cfb9770c3a98345382167c260ff.mp3?1448776665',
ogg: ''
},
{
title: 'coming home',
artist: '温馨治愈',
cover: 'http://7xp21e.com2.z0.glb.qiniucdn.com/aec480cb6e600a71bd8be0fe140801889a6c035c.png',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/3684966653e04dbf1b97abab836c2000d1ec9dd10a353e508a7c7576b06f3cd264084b11.mp3?1448036682',
ogg: ''
},
{
title: 'Moon Light',
artist: '风和日丽 Serenity',
cover: 'http://kibey-echo.b0.upaiyun.com/poster/2014/08/18/a0b81cf2ad058c70.jpg',
mp3: 'http://7fvgtj.com2.z0.glb.qiniucdn.com/f5f9ae137302ac7ff02ee98fd63e8e99',
ogg: ''
},
{
title: '记忆停留的地方(3D环绕)',
artist: 'July',
cover: 'http://echo-image.qiniucdn.com/FkBR2sysHoicmNexvyj-6V7yb7Yk',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/a8140bab0f4c0d4377a5afaef1d68de7f592a00f6f7da6119ad4e2834b2ceb3256861ef8.mp3?1449257772',
ogg: ''
},
{
title: '远い空へ【推荐】',
artist: '三輪学',
cover: 'http://kibey-echo.b0.upaiyun.com/poster/2014/09/03/633937f0b9ceda40.png',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/c052522e34771690e12d9e15a40181a20e83e574224da1f4d0715f20025da0db8a16045b.mp3?1455635319',
ogg: ''
},
{
title: '膝枕で過ごす放課後',
artist: '三輪学',
cover: 'http://echo-mx.b0.upaiyun.com/1769844339.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/647b1ac1df9823ce2145d8fa61048eaef2463b73e4ce4d69973bd6c41afb418d9269d7bc.mp3?1447652933',
ogg: ''
},
{
title: 'hope(Ver0.5)【推荐】',
artist: 'M.Graveyard',
cover: 'http://echo-image.qiniucdn.com/71c38bca5627a2e8c82b6c3ead0abc41d636b464',
mp3: 'http://api.itwusun.com/music/songurl/echo_320_1097773.mp3?sign=bc857e3987e531f6691e6f3c611322f4',
ogg: ''
},
{
title: '夜的钢琴曲(五)',
artist: '石进',
cover: 'http://echo-mx.b0.upaiyun.com/1769966152.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/f5c79ae1f26325167ee0e709525cdc8d26002acd1a4f51d0514b46038d810a01dada12f8.mp3?1448647689',
ogg: ''
},
{
title: 'Astral Requiem【推荐】',
artist: '山下直人',
cover: 'http://echo-image.qiniucdn.com/FvkBEnEnW-FnMyVgLEiB2S3k81d8',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/9c77462be491cd6e22a9ae578f31e56148311448833b36f8b18cbe98df784a700d65584c.mp3?1450762994',
ogg: ''
},
{
title: 'MO1',
artist: '梶浦由記',
cover: 'http://echo-mx.b0.upaiyun.com/3517333.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/0861c118f0838227413eb7da63a784520827f06fc6cf9111912974c1050f3d35210769bb.mp3?1448034911',
ogg: ''
},
{
title: '纯音乐',
artist: '迪迦bgm/主题曲',
cover: 'http://echo-image.qiniucdn.com/37bbe22011fbdee3f33cb5494ddea30985b0d0df',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/ab978bde8ff10bfd3a80ccdd352f11dc4616e4f9cbe5b8209b6404c056dcb04e8a6cbe58.mp3?1454427811',
ogg: ''
},
{
title: '必ず…勝って【推荐】',
artist: '矢野立美/迪迦bgm',
cover: 'http://echo-mx.b0.upaiyun.com/1770790585.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/2aa6dc44a4226888f002989b0b63c9edf4445617a057805ecc2ab71aa5f5c38758897dd6.mp3?1447738326',
ogg: ''
},
{
title: '再会、そして未来へ【推荐】',
artist: '矢野立美/迪迦bgm',
cover: 'http://echo-image.qiniucdn.com/8a7dad353b4a0eaa0077d9f077c1d7af094db217',
mp3: 'http://other.web.rb01.sycdn.kuwo.cn/resource/n3/49/31/324063537.mp3',
ogg: ''
},
{
title: '爱と绊【推荐】',
artist: '矢野立美/迪迦bgm',
cover: 'http://echo-image.qiniucdn.com/87de664e924dec375784573e485169f2cdec757d',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/af156dd3602dc050e3dd3a5befa5e4167c7e174748fdfa36167bbdfb0fddc0ed910db279.mp3?1447726779',
ogg: ''
},
{
title: 'Yawning Lion【推荐】',
artist: 'Deemo',
cover: 'http://echo-mx.b0.upaiyun.com/1772515115.jpg',
mp3: 'http://7u2q8y.com2.z0.glb.qiniucdn.com/c1/5f0ed2704f247c1f1243a3f7ffb2dd32079fc051c2c0bd331682cf749e5b704d52f547d4.mp3?1448683037',
ogg: ''
},
{
title: '清-demo【推荐】',
artist: '寒洛&鼓润',
cover: 'http://echo-mx.b0.upaiyun.com/1772515115.jpg',
mp3: 'http://file.loouk.com/qing-Demo.mp3',
ogg: ''
},
{
title: 'Dream',
artist: 'Deemo',
cover: 'http://kibey-echo.b0.upaiyun.com/bd39926a2a1f9b6375c4a328b3833887.jpg',
mp3: 'http://api.itwusun.com/music/songurl/echo_320_212329.mp3?sign=731cdd37f10fe6de72b1fb8cc5524035',
ogg: ''
},
{
title: 'River Flows In You (Single Mix)',
artist: 'Jasper Forks',
cover: 'http://echo-mx.b0.upaiyun.com/1769920886.jpg',
mp3: 'http://api.itwusun.com/music/songurl/echo_320_228693.mp3?sign=2572b154723290472fce0ce94077d41f',
ogg: ''
}];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);