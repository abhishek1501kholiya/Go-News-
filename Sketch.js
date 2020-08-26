//All the variables
var canvas;
var form;
var valuer2;
var bg;
var back1 , back2 , back3 , back4 ;
var feedbackpic;
var explorepic;
var head ;
var logo;
var gb;
var button ;
var question1
var question2
question2;
var button2
var button3
var environment;
var Pollution
var equestion1;
var equestion2;
var explorepic;
var ebutton1
var homepic
function preload(){
    bg = loadImage('image.jpg');
  feedbackpic = loadImage(' feedback.jpeg')
  //explorepic = loadImage()
  gb = loadImage('gb.jpg')
  environment = loadImage('unnamed.jpg');
  Pollution = loadImage('Pollution.jpg');
  explorepic = loadImage("Forestbeauty.jpg");
  homepic = loadImage("Fridge.jpg");
}
function setup (){
    canvas = createCanvas(displayWidth,displayHeight);
    form  = new Form();
    back1   = new Button('Back',50,750,'back1');  
    back2  = new Button('Back',200,750,'back2');
    back3 = new Button('Back',650,750,'back3');
    head = createElement('h2');
    button =  createButton('>');
    question1 = createElement('h2');
    question2 = createElement('h2');
    question3 = createElement('h2');
    button2 = createButton('>');
    button3 = createButton('>');
    equestion1 = createElement('h2');
    ebutton1 = createButton('>');  
}

function draw (){ 
    
    background("white");
   text('Go News!',0,0);
   textSize(24);
   
    image(bg,0,100,displayWidth,725);
    form.display(); 
   
    if(gameState === "form2"){
     valuer2 = valuer;
     }
    if(gameState === "Home"){
    //    back1.hide();
        form.display();
    }
    if(gameState == "didyouknow"){
    back1.display();
    back1.show();



    }
    else{
        back1.hide();
    }   
    if(gameState === "back1"){
        
        form.greeting.show();
        form.greeting2.show();
        form.didyouknow.show();
        form.feedback.show();
        form.Explore.show();
      }
   if(gameState === "Explore"){
       background(explorepic);
            back2.display();
            back2.show();
                 equestion1.html("How technology is helping in our home");
            equestion1.position(500,200);
            equestion1.show();
            fill('white');
            ebutton1.position(500,250);
            ebutton1.show();
            rect(300,200,800,80);
            image(homepic,350,200,140,80)
            ebutton1.mousePressed(()=>{
                window.location.href = "eQuestion1.html";
            })
           
   }else{
       back2.hide();
       equestion1.hide();
       ebutton1.hide();
   }
   if(gameState === "back2"){
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.Explore.show();
       form.feedback.show();
       form.didyouknow.show();
   }
   if(gameState === "feedback"){
       back3.display();
       back3.show();
   }
   else{
       back3.hide();
   }
   if(gameState === "back3"){
       //rect(300,300,80,80)
       form.greeting.show();
       form.greeting2.show();
       form.greeting3.show();
       form.feedback.show();
   }
   if(gameState === "feedback"){
    background(feedbackpic)
   }
   if(gameState === "Explore"){
   // background("white");
        head.html("Let's Explore the case studies  that are  helping in making the environment clean");
        
        head.position(200,100);
    head.show();
   }else{
       head.hide();
   }
   if(gameState === "didyouknow"){
    // /background("white");
    fill("white") ;   
  
        question1.html("What is Global Warming ? and What are its causes ");
    question1.position(500,200);
    question1.show();

    question2.html("How  to make our environment clean and green");
    question2.position(500,400);
    question2.show();
    question3.html("What is Pollution and What are its  types");
    question3.position(500,600);
    question3.show();

    button.position(550,250);
    button.show();

    button2.position(550,450);
    button2.show();
    
    button3.position(550,650);
    button3.show();

    button.mousePressed(()=>{
        window.location.href = "Question1.html";
        
    })

    button2.mousePressed(()=>{
      window.location.href = "Question2.html";
    })
    button3.mousePressed(()=>{
        window.location.href = "Question3.html";
    })

    rect(300,200,800,80);  
    rect(300,400,800,80);
    rect(300,600,800,80);
    image(gb,350,200,140,80);
    image(environment,350,400,140,80);
    image(Pollution,350,600,140,80);
   }
   else{
      button.hide();
      question1.hide();
      button2.hide();
      question2.hide();
      button3.hide();
      question3.hide();
    }
}  