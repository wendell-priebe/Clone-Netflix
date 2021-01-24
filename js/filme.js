 //remove div sugestion
// let pause = document.getElementById("movie_player")
// let bob = pause.classList.contains('paused-mode')
// console.log(bob)

// if(bob){
//     console.log("entrei")
// }
// console.log("to fora")
 //paused-mode
 // document.getElementsByClassName("ytp-pause-overlay").style="display: none;"


 // Load the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/player_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // Replace the 'ytplayer' element with an <iframe> and
 // YouTube player after the API code downloads.
 var player;
 function onYouTubePlayerAPIReady() {
   player = new YT.Player('ytplayer', {
     // height: '100vh',
     //width: '100vw',
     videoId: '8QnMmpfKWvo?autoplay=1&cc_load_policy=1&enablejsapi=1&hl=br&modestbranding=1&playsinline=1&iv_load_policy=3"'
   });
 }