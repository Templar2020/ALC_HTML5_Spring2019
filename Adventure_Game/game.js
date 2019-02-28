// Single line comment
/* 

Multiline comment

*/

// document.write("<h1>I can't wait for <em>spring!</em></h1>");


//alert("Warning! Will Robinson...Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");


// Check coins expression. To check the expression call just like a function ex. checkCoins();
var checkCoins = function(){
	alert("Gold Coins: "+player.inventory.coins.gold+"\n Silver Coins: " +player.inventory.coins.silver+"\n Copper Coins: "+player.inventory.coins.copper);
}

var inventory ={
	arrows:0,
	maxArrows:100,
	coins:125,
} 



var player = {
	name:"Bob",
	race:"Human",
	age:30,
	health:100,	
	inventory:{
		coins:{
			coin:1000,
			gold:10,
			silver:12,
			copper:2000,			
		},
		keys:{
			home:0,
			castle:0,
			inn:0,
		},
		food:{
			water:1,
			bread:0,
			fish:0,
			mutton:0,
			rabbit:0,
			apple:0,			
		},
		weapons:{
			sword:0,
			axe:0,
			knife:0,
		},
		armor:{
			shield:0,
			armorClass:1,
		}		
	}
	
}

function GetRandInt(max){
	var randInt = Math.floor(Math.random()* Math.floor(max));
	
	return randInt;
	
}

// Start Game
Game();

function Game(){
	
	var wizardNames = ["Bethazar", "Mordac","Grendor","Orco"];
	
	alert("Legend of "+wizardNames[Math.floor(Math.random()* 4)]+"!");
	
	var playerName = prompt("What is your name?");
	
	while(!confirm("Are you sure you want "+playerName+" as a name?")){
		playerName = prompt("What name do you want?");
		
	}
	
	alert("Welcome to the land of Drizdal "+ playerName);
	
	
	Prison();
	
	function Prison(){
		var prison = prompt("You wake up...Your head is pounding and your vison is blurred. After pacing around walking off the headache your vision clears. It appears you are in a prison cell and you cannot remember why. \n -look around \n - go back to sleep \n - taunt the guard").toLowerCase();
		
		if(prison == "look around" || prison == "look"){
			
			var prisonLook = prompt("The prison is a small rectagle shaped room, with stone walls and a dirt floor. A rat scurries into a hole in the corner. Bugs squirm and scamper underfoot. There is a barred window to the back. A bed occupied by a stranger asleep snoring to the right. The cell bars and locked door to the front. An empty bed which you had sleeped in the night before to the right.In the center of the dirt floor is a lumpy moldy damp rug. \n -wake stranger \n -move rug \n -eat bugs");
		}
		
		else if(prison == "go back to sleep" || prison == "sleep"){
			alert("You fall back to sleep in your dirty cot. You dream of distant lands and adventures");
			var resume = confirm("Do you wish to continue?");
			
			if(resume){
				Prison();
			}
			else{
				alert("Game Over!");
			}
		}
		
		else if(prison == "castle"){
			Castle();
		}
		
		else if(prison == "coins"){
			checkCoins();
			Prison();
		}
		
		else if(prison=="shop"){
			Shop();
		}
		
		else{
			alert("I dont know what "+prison+" is!");
			Prison();
		}
	}
	
	function Swamp(){
		var swampEnv = prompt("This is a dank swamp. \n -follow path \n -swim");
		
		if(swampEnv == "follow" || swampEnv == "follow path"){
			var swampPath = prompt("You enter on the swamp path and head north in the disance you see a swamp hut. As you approach you see a light burning inside. \n -enter hut \n -burn down hut");
			if( swampPath = "enter"){
				alert("You entered the hut. There is an old hag bend over a black cauldron on the fire in the hearth");
			}	
			else if(swampPath = "burn down hut"){
				alert("You burn down the hut...hope you feel good about yourself.. Pyro!");
			}	
			else{
				alert("dont throw rocks at hut...please!"); 
			}	
			
			
		}
		else if(swampEnv == "Swim"){
			
		}
		else{
			alert("I don't understand "+swampEnv);
			Swamp();
		}		
			
			
		}
	function Shop(){
		var arrowsShop = 100;
		var arrowPrice = 1;
		
		
		var purchase = prompt("Welcome to the Shop, what would you like to buy? \n- Arrows:"+arrowsShop).toLowerCase();
		
		if(purchase == "arrows" || purchase == "arrow"){
			var arrowCon = prompt("How many arrows would you like to purchase?");
			
			while(!confirm("Are you sure you want to purchase "+arrowCon+" arrows, for "+arrowPrice+" per arrow?")){
				arrowCon = prompt("How many arrows do you wish to buy?");
			}
			
			for(i = 1; i <= arrowCon; i++){
				//Add arrow to inventory
				inventory.arrows ++;
				console.log("You have "+inventory.arrows+" arrows");
				//Removes coin from inventory
				inventory.coins --;
				console.log("You have "+inventory.coins+" coins");
				//Removes arrow from shop inventory
				arrowsShop --;
			}
			alert("You have "+inventory.coins+" coins in your purse");
			alert("You have purchased "+arrowCon+" arrows. Thank you!");
			Shop();			
		}
		else if(purchase == "exit"|| purchase == "leave"){
					Prison();
				}
		
	}	
	function Castle(){
			var insideCastle = prompt(" - upstairs - downstairs - courtyard - balcony - look ").toLowerCase();
			
			switch(insideCastle){
				case "upstairs": 
				case "go upstairs":
				case "take elevator":	
					var upstairs = prompt("You walk a long flight of stairs to top floor of the castle.");
					
					Castle();
				break;
				case "downstairs":
					alert("you go downstairs");
					
				break;
				case "courtyard":
					alert("you go to the courtyard");
					Castle();
				break;
				case "balcony":
					alert("you go to the balcony");
					Castle();
				break;
				default:
					alert("I don't know what "+insideCastle+" is!");
					Castle();
				break;		   
				   
				   }	
		}
	
	
	
}
	
	
	
	

