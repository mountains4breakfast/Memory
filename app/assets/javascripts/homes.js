// $('h1').text('Modified by jQuery').css('color', 'red').slideUp(2000).slideDown(2000);





// CSS
// .hide {
// 	display: none;
// }


// HTML
// <div class="info_div hide">
// 	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
// </div>


var playerOneName = prompt('What is your Name Player?');
document.getElementById('player_one_name').innerHTML = playerOneName;

var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H']
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0){
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}

function newBoard(){
	tiles_flipped = 0;
	var output = '';
	memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i ++){
		output += '<div id ="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output
}










// var boxes = document.getElementsByClassName('tic-tac-toe-box');
// console.log(boxes);

// var wholeBoard = "X"

// for(var i = 0; i < boxes.length; i++) {
// 	var box = boxes[i];
// 	box.addEventListener('click', function() {

var boxes = document.getElementsByClassName('memory-box');
console.log(boxes);

for(var i = 0; i < boxes.length; i++) {
	var box = boxes[i];
	box.addEventListener('click', function() {

	});
}

// Toggle slide
// $('.show_info_div').click(function(){
// 		// Remove class way
// 		// $('.info_div').removeClass('hide');
// 		// Slide toggle way
// 		$('.info_div').slideToggle('slow', function(){
// 			if($('.info_div').is(':hidden')){
// 				$(".show_info_div").text('Show Info');
// 			} else {
// 				$(".show_info_div").text('Hide Info');
// 			}
// 		});

// Toggle slide
$('.')






var clear = document.getElementById('clear')
	
clear.addEventListener('click', function() {
	for(var i = 0; i < boxes.length; i++) {
		var box = boxes[i];
		box.innerHTML = "";	
	};
})