// set up text to print, each item in array is new line
var aText = new Array(
    "Day in the life of an NYU student..."
    );
var iSpeed = 150; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
    iIndex=0;
}

function fade() {
    var animation_height = $(window).innerHeight() * 0.25;
    var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

    $('.fade').each(function() {
        
        var objectTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).innerHeight();
        
        if ( objectTop < windowBottom ) {
            if ( objectTop < windowBottom - animation_height ) {
                $(this).css( {
                    transition: 'margin-top 0.5s ease',
                    marginTop: "0px"
                } );
            }
            else{
                $(this).css( {
                    transition: 'margin-top 0.5s ease',
                    marginTop: "400px", 
                } );
            }
        } else {
            $(this).css( 'opacity', 1 );
        }
    });
}

let title_array = ["Gramercy", "Trader Joe's & Palladium", "THe NYC View", "In-person classes!", "First batch of snow!", "WSQ in fall!", "Rainbow in NYC", "Jungles they say.", "NYU Bus", "Feeling like in middle school.", "Tandon here we go!", "Who's Bern Dibner?", "Subway Violin???", "Central Park in fall.", "Eat!", "Night life. Period.", "Brookly Bridge"]
let description_array = ["At 10am, I usually walk out of my Gramercy dorm, on my way to classes.",
                    "Trader Joe's is my go-to grcoery store! It's right next to Palladium dorm as well.", 
                    "Here is the view from my dorm.", 
                    "Guess I was the first person to my class...",
                    "I was waiting for the snow to come for quite some time, and NYC remained quite warm until early December. So I was really happy to see snow falling on my pants! This is rare for someone like me who comes from an East Asian country.", 
                    "Seasonal change is a big thing for Washington Square Park. See how the leaves have turned brown?", 
                    "The odds of seeing a rainbow on the fountain at WSQ...I rushed to record this moment with my phone as fast as I can, and I felt very wholesome that day. This view is from the 7th floor of Kimmel Center. Great study place!",
                    "I was standing in the plaza after a successful workout session at 404 Fitness on Lafayette St. I felt like I was in a movie, sipping coffee under these concrete jungles.",
                    "Hop on the NYU bus to take a free ride to your classes. They are pretty convenient! (but I prefer talking in NYC)", 
                    "My view from the ride to classes.",
                    "I am almost there!",
                    "Tandon is the engineering school at NYU, and it is only in Brooklyn! What you're seeing now is the NYU library in Brooklyn, Bern Dibner.",
                    "Turn up your speaker to listen to some blissful string music on the NYC subway. It is definitely a refreshing moment after a long day.",
                    "NYU students not only get to enjoy a vibrant city life, but also exuberant natur. This clip was taken at Central Park during fall. You can see some foliage already! It was such a sunny day too.",
                    "And of course, how could you enjoy NYC without eating out with friends? We went to a Korean ice cream place in K-town. One thing about NYC, is that the portions must be huge everywhere. Our ice cream portions were huge so we ordered only two bowls, but we couldn't finish them!", 
                    "Do we even need to mention this? NYC has one of the most diverse and amazing night life in the world. This video was me going down from an indoor-slide at the club Slate.",
                    "At the end of this video, I was soaking in the sunset. I finally did my golden hour moment on the Brooklyn Bridge!"
                    ]

function updateTextLeft(title, content){
    document.querySelector("#dynamic_text1 h1").innerHTML = title;
    document.querySelector("#dynamic_text1 p").innerHTML = content;

}

function updateTextRight(title, content){
    document.querySelector("#dynamic_text2 h1").innerHTML = title;
    document.querySelector("#dynamic_text2 p").innerHTML = content;

}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let checkInt; // save this as a var in this scope so we can clear it later
function onYouTubePlayerAPIReady() {
   player = new YT.Player('player', {
    events: {
        'onStateChange': onPlayerStateChange
    }
   });
}
function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING){
        startInterval();
    }
}
function startInterval() {
   //checks every 100ms to see if the video has reached 6s
   checkInt = setInterval(function() {  
       console.log(title_array.length)
       current = player.getCurrentTime()
        if (current <= 4) {
            updateTextLeft(title_array[0], description_array[0]);
        }
        else if(current > 4 && current <= 9 ){
            updateTextRight(title_array[1], description_array[1]);
        }
        else if(current > 7 && current <= 12 ){
            updateTextLeft(title_array[2], description_array[2]);
        }
        else if(current > 12 && current <= 17 ){
            updateTextRight(title_array[3], description_array[3]);
        }
        else if(current > 17 && current <= 22 ){
            updateTextLeft(title_array[4], description_array[4]);
        }
        else if(current > 22 && current <= 25 ){
            updateTextRight(title_array[5], description_array[5]);
        }
        else if(current > 25 && current <= 34 ){
            updateTextLeft(title_array[6], description_array[6]);
        }
        else if(current > 34 && current <= 44 ){
            updateTextRight(title_array[7], description_array[7]);
        }
        else if(current > 44 && current <= 47 ){
            updateTextLeft(title_array[8], description_array[8]);
        }
        else if(current > 47 && current <= 50 ){
            updateTextRight(title_array[9], description_array[9]);
        }
        else if(current > 49 && current <= 57 ){
            updateTextLeft(title_array[10], description_array[10]);
        }
        else if(current > 57 && current <= 60 ){
            updateTextRight(title_array[11], description_array[11]);
        }
        else if(current > 60 && current <= 75 ){
            updateTextLeft(title_array[12], description_array[12]);
        }
        else if(current > 75 && current <= 81 ){
            updateTextRight(title_array[13], description_array[13]);
        }
        else if(current > 81 && current <= 88 ){
            updateTextLeft(title_array[14], description_array[14]);
        }
        else if(current > 88 && current <= 90 ){
            updateTextRight(title_array[15], description_array[15]);
        }
        else if(current > 90){
            updateTextLeft(title_array[16], description_array[16]);
        }
    }, 100)
}



$(window).on("load",function() {
    typewriter();
    setInterval(typewriter, 8000);
    //$('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});

    let meow = new Audio('./sounds/meow.wav');
    document.querySelector("#bobcat img").addEventListener("click", function(event){
        meow.play();
    })

    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value + "%";
    }
    let changed = false;
    document.getElementById("love_button").addEventListener("click", function(event){
        document.body.style.backgroundColor = "#fa9bc7";
        changed = true;
    });




    
    var brd = document.createElement("DIV");
    document.body.insertBefore(brd, document.getElementById("container"));

    const duration = 3000;
    const speed = 0.5;
    const cursorXOffset = 0;
    const cursorYOffset = -5;

    var hearts = [];
            
    function generateHeart(x, y, xBound, xStart, scale)
    {
        var heart = document.createElement("DIV");
        heart.setAttribute('class', 'heart');
        brd.appendChild(heart);
        heart.time = duration;
        heart.x = x;
        heart.y = y;
        heart.bound = xBound;
        heart.direction = xStart;
        heart.style.left = heart.x + "px";
        heart.style.top = heart.y + "px";
        heart.scale = scale;
        heart.style.transform = "scale(" + scale + "," + scale + ")";
        if(hearts == null)
            hearts = [];
        hearts.push(heart);
        return heart;
    }

    var down = false;
    var event = null;

    document.onmousedown = function(e) {
        down = true;
        event = e;
    }

    document.onmouseup = function(e) {
        down = false;
    }

    document.onmousemove = function(e) {
        event = e;
    }

    document.ontouchstart = function(e) {
        down = true;
        event = e.touches[0];
    }

    document.ontouchend = function(e) {
        down = false;
    }

    document.ontouchmove = function(e) {
        event = e.touches[0];
    }

    var before = Date.now();
    var id = setInterval(frame, 5);
    var gr = setInterval(check, 100);

    function frame()
    {   
        
        var current = Date.now();
        var deltaTime = current - before;
        before = current;
        for(i in hearts)
        {
            var heart = hearts[i];
            heart.time -= deltaTime;
            if(heart.time > 0)
            {
                heart.y -= speed;
                heart.style.top = heart.y + "px";
                heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
        }
            else
            {
                heart.parentNode.removeChild(heart);
                hearts.splice(i, 1);
            }
        }
    }

    function check()
    {
        if(down && changed == true)
        {
            var start = 1 - Math.round(Math.random()) * 2;
            var scale = Math.random() * Math.random() * 0.8 + 0.2;
            var bound = 30 + Math.random() * 20;
            generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
        }
    }
});