

var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
canvas.addEventListener("click", getPosition, false);

//global variables
var counter;
var lose;
var x,y;
var myVar;
var mousecount=0;
var gamestate=0;
var myVar2;
var state=0;
var value;
var max =1;
var count=0;
var array=[2,1,4,3,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
var redimg = new Image();
var blueimg = new Image();
var greenimg = new Image();
var yellowimg = new Image();
var redimg1 = new Image();
var blueimg1 = new Image();
var greenimg1 = new Image();
var yellowimg1 = new Image();

//variable to look the images
redimg.src="images/red.jpg";
blueimg.src="images/blue.jpg";
yellowimg.src="images/yellow.jpg";
greenimg.src="images/green.jpg";
redimg1.src="images/red1.jpg";
blueimg1.src="images/blue1.jpg";
yellowimg1.src="images/yellow1.jpg";
greenimg1.src="images/green1.jpg";


function Clear() //Stuff that are always on the screen
{

	ctx.clearRect(0,0,500,500);
	ctx.drawImage(greenimg1, 10, 10);
	ctx.drawImage(redimg1, 255, 10);
	ctx.drawImage(yellowimg1, 10, 255);
	ctx.drawImage(blueimg1, 255, 255);
	ctx.fillStyle="white";
	ctx.arc(250,250,90,0,2*Math.PI);
	ctx.fill();
	ctx.fillStyle="black";
	ctx.font = '24px Calibri';
	ctx.fillText("Click Me First!", 180, 250);
	ctx.font = '24px Calibri';
	ctx.fillText(max,238,300);
}

function Check()
{

	Clear();
	if(array[value]==1 && value>=0)
	{
		if(x>=0 && x<=250 && y>=0 && y<=250)
		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(greenimg,35,35);
		}
		else
		{
			state=0;
      lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = '24px Calibri'
			ctx.fillText("You Lose",180,240);
		}
	}
	else if(array[value]==2 && value>=0)
	{
		if(x>=250 && x<=500 && y>=0 && y<=250)
  		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(redimg,265,35);
		}
		else
		{
			state=0;
      lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = '24px  Calibri'
			ctx.fillText("You Lose",180,240);
		}
	}
	else if(array[value]==3 && value>=0)
	{
		if(x>=0 && x<=250 && y>=250 && y<=500)
  		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(value,35,265);
		}
		else
		{
			state=0;
      lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = '24px  Calibri'
			ctx.fillText("You Lose",180,240);
		}
	}
	else if(array[value]==4 && value>=0)
	{
		if(x>=250 && x<=500 && y>=250 && y<=500)
  		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(blueimg,265,265);
		}
		else
		{
			state=0;
      lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = '24px Calibri'
			ctx.fillText("You Lose",180,240);
		}
	}
}

function getPosition(event)
{
        x = new Number();
        y = new Number();
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
	if(state==1)
	{
		Check();
	}
	else
		state=1;
	value++;
	if(mousecount==max && lose==0)
	{
		max++;
		setTimeout(function(){Clear();},800);
		setTimeout(function(){StartGame();},300);
	}
	mousecount++;
}

function Initialize()
{
	if(gamestate==0)
	{
		for(var i=0;i<100;i++)
		{
			randomness=Math.floor(Math.random()*4+1)
			array[i]=randomness;
		}
		Clear();
		gamestate=1;
		StartGame();
	}
}

function StartGame(){
	lose=0;
	count=0;
	Clear();
	myVar = setInterval(function(){setColor(); count++; }, 900);
}

function setColor() {
	Clear();
	setTimeout(function(){Clear();},800);
	if(array[count]==1)
		ctx.drawImage(greenimg,35,35);
	if(array[count]==2)
		ctx.drawImage(redimg,265,35);
	if(array[count]==3)
		ctx.drawImage(yellowimg,35,265);
	if(array[count]==4)
		ctx.drawImage(blueimg,265,265);
	if(count+1==max)
	{
		value=-1;
		mousecount=0;
		clearInterval(myVar);
		return;
        }
}
