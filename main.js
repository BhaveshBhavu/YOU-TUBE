    
  //  nav bar 
  
  var nav = ` <log>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rKtTjcpnWvbYFaHPwe_Y6-H-1D9APL3_sg&usqp=CAU" width="102px" />
      </log> 
      <div class = "olicon" >
     <icon>
          <i class="fa-brands fa-chromecast"></i>
          <div class="icon_menu">
            <div class="icon_men_menu">
              <h3>Connect to a device</h3>
              <div class="icon_men_lodin">
                <img src="https://c.tenor.com/whis5JX19ycAAAAC/loading-load.gif" width="50px" />
                Searching for device
              </div>
              <div class="icon_men_castin"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cnIPUW2_ewmhBHnqhnAlgP0iYmA3_PFKCA&usqp=CAU" width="31px" />Link with TV code </div>
              <div class="icon_men_castin mar "><img src="https://icones.pro/wp-content/uploads/2021/05/icone-d-information-grise.png" width="30px" />Learn more</div>
            </div>
          </div>
        </icon> 
        <not onclick = "notificesan()" >
     <i class="fa-regular fa-bell"></i> 
     </not> <srch onclick = "search()" >
     <i class="fa fa-search" id="sr"></i> 
     </srch> 
     <chenal > <a href="Setting.html">
          <div>
          
          </div></a> 
          </chenal> 
          </div>`;

  document.getElementById('nav').innerHTML = nav ;
  
  // nav bar and 
  
  


for (var o = 0; o < 3; o++) {
  
var img = new Array('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2nIv_8mbeTF81DkqKFe3FG15DCzxu1LiQA&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGM6_n1N1IbLwg0A6VRv5YIUQnAPFS2xIxxg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWI2JHkdRp-qlRq4-qubIpqgQ0mN2odp5k5g&usqp=CAU');

var logo = new Array('https://yt3.ggpht.com/ytc/AKedOLSsdk9Oc0v0rq7nrprpm5xNsto2iMx7G-J-ducejA=s900-c-k-c0x00ffffff-no-rj','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIxIfyalitDypFnWEIY2JsCgafIidOUB5MQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWQu318RhH1KWOWIhWqeXppp2uh7aXULgpg&usqp=CAU');

var text = new Array('Iron Man vs Killian Final Battle - Mark 16, Mark 40 Suit Up - Iron Man 3 (2013) Movie CLIP HD','Captain America Civil War Funny Scenes [in HINDI]','How Hackers Hack Passwords? - Fully Explained') ;

var chenalname = new Array('TopMovieClips', 'Apun Ka Hollywood','WsCube Tech  ');


var views = new Array('1.3 crore views','1.8 crore views','16 lakh views');

var det = new Array('1 year ago','3 years ago','1 month ago');


  for (var i = 0; i < 1; i++) {
  
      var video_men = document.querySelector('.video_men_box');
  
     video_men.innerHTML += `
   <div class="video_men_box">
            
          <div class="vdio_b">
            <img src="${img[o]}" alt="" />
            <div class="vdio_logo">
              <div class="vlogo">
                <img src="${logo[o]}" alt="" />
                <div class="vtext">
                  <p>
                    ${text[o]}
                    </p>
                  <l>${chenalname[o]}•${views[o]}•${det[o]}</l>
                </div>
              </div>
              <div class="_3dot">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>`;
  
  
    }
  }
  
  //  and
  
  

  
  
  
console.log('Hello World!');

function sb() {
  window.open('1Subscriptions.html');
}

function lb() {
  window.open('1Library.html');
}


function shorts(){
  window.open("https://m.youtube.com/shorts/Pbyuync-osI");
  
}

function home(){
window.open('index.html');
  
}

function up(){
var upp = document.getElementById('up');
  
  upp.classList.toggle('video_UP_dis_js');
}


function  notificesan(){
  var a = document.getElementById('notif_menu');
  
  a.classList.toggle('dispale');
  
}



function  search(){
  var a = document.getElementById('search');
  
  a.classList.toggle('search_dispale');
  
}



function  voes_search(){
  var a = document.getElementById('voes_se');
  
  a.classList.toggle('voes_search_d');
  
}




function voice()
  {
   var recognition = new webkitSpeechRecognition ();
   recognition.lang = "en-GB";
   recognition.onresult = function(event)
    {
      document.getElementById ('h3_voes').innerHTML=event.results[0][0].transcript;
    }
    recognition. start();
    
  }
         /*  इंग्लिश बोलने के लिए यह लिखें   en 
     */
     
     
      /*  हिंदी बोलने के लिए यह 
      hi
     */ 
     


  
  
  // flot_menu
  
  var flot_menu = ` <bo>
      <i class="fa-regular fa-compass"></i>
      <h>Explore</h>
    </bo>
    <lin></lin>
    <o>
      All
    </o>
    <m class="color_box">
      New <an>to</an> you
    </m>
    <men>
      Comedie
    </men>
    <men>
      Comedie
    </men> `;
  
  document.querySelector('.flot_menu').innerHTML = flot_menu ;
 // flot_menu amd 
  
  
  // video_men_box


 // video_men_box and video_men
 
 // 
  
  
