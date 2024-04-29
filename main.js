var v1=document.querySelector(".v1")
var v2=document.querySelector(".v2")
var v3=document.querySelector(".v3")
var v4=document.querySelector(".v4")
var video=document.querySelector('video');
var source=document.querySelector('source');
v1.addEventListener('click',function(){
    source.src='185096 (540p).mp4';
    video.load();
})
v2.addEventListener('click',function(){
    source.src='198790 (540p).mp4';
    video.load();
})
v3.addEventListener('click',function(){
    source.src='jellyfish_-_10480 (540p).mp4';
    video.load();
})
v4.addEventListener('click',function(){
    source.src='nature_-_31377 (1080p).mp4';
    video.load();
})
