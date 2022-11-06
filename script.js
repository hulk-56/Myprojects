console.log("Welcome to BTM's Music ")
let songIndex = 0;
let audioElement = new Audio('1.MP3');
let masterplay = document.getElementById('masterplay')
let myprogressBar = document.getElementById('myprogressBar')
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    { songname: "salame-ishk", filePath: "songs/1.MP3", coverpath: "cover/1.jpg" },
    { songname: "Blank", filePath: "songs/2.MP3", coverpath: "cover/2.jpg" },
    { songname: "imagine Dragon", filePath: "songs/3.MP3", coverpath: "cover/3.jpg" },
    { songname: "Let-me-down", filePath: "songs/4.MP3", coverpath: "cover/4.jpg" },
    { songname: "sajna hai mujhe ", filePath: "songs/5.MP3", coverpath: "cover/5.jpg" },
    { songname: "see you again ", filePath: "songs/6.MP3", coverpath: "cover/6.jpg" }
]
// let audioElement = new Audio('one.mp3'); 
// audioElement.play();
songItem.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;

})

masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
})
// listen to event

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update seelar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeAllplAy = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



//  Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
//      element.addEventListener('click', (e)=>{ 
//          makeAllplAy();
//          songIndex = parseInt(e.target.id);
//          e.target.classList.remove('fa-play-circle');
//          e.target.classList.add('fa-pause-circle');
//          audioElement.src = `songs/${songIndex}.mp3`;
//         //  masterSongName.innerText = songs[songIndex].songName;
//          audioElement.currentTime = 0;
//          audioElement.play();
//          // gif.style.opacity = 1;
//          masterplay.classList.remove('fa-play-circle');
//          masterplay.classList.add('fa-pause-circle');
//      })
//  })


 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
      makeAllplAy();   
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
     })
 })

 document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex += 1; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

 })


 document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=6){
        songIndex = 0;
    }
    else{
        songIndex -= 1; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

 })
