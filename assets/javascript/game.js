$(document).ready(function() {
/*

1)Player chooses player by clicking.  Create 'on click' function that will
keep this player in that area, but move other 3 characters down to enemy area.

2)Player chooses a character from remaining three, which then moves to the
'defender area'.  

3)Player will then press "attack" button. create working button that when
clicked:

	CREATE LOOP TO DO THIS:
	When attack button is clicked... 
			While Player Character Health Points > 0 && Defender Health Points > 0:
			
							Player Character Health Points stay constant AND
							Defender LOSES Health Points
								
							Defender Counter Attacks AND
							Player Character LOSES Health Points
			
			WHEN
							health points of Defender <= 0 
								move Defender out of "Defender Area"
								Player can now choose another enemy to attack

							Player character health points <= 0
								Game over, show reset button. 

	

	CREATE RESET BUTTON TO:
			move all characters back to original spot.  start game again.

	var healthPoints = [];
	var defenderPoints = [];
	var characters = [];

*/


		  $("#luke").on("click", function(){
						$("#luke").appendTo('.battleArea');
					});
			/*$(".thumbnail").on("click", function(){
						$("#darthVader").appendTo('.battleArea');
					});
			$(".thumbnail").on("click", function(){
						$("#stormTrooper").appendTo('.battleArea');
					});
			$(".thumbnail").on("click", function(){
						$("#yoda").appendTo('.battleArea');
					});*/
})



























		