$("body").css("background-color", "lightgrey");
$("body").css("text-align", "center");


/*
Element Changes
*/
var span = $("span");

span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css("color","red");
	};
});

span.each(function( index, element ) {
	if(index % 2 !== 0) {
		$(element).css("background-color", "green");
	};
});

//$("span:even").css("color", "blue");
//$("span:odd").css("background-color", "purple");

/*
Add Buttons for each <p>
*/
var paragraphs = $("p");

paragraphs.each(function(index,element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
	$(element).append(button);
	$("button").css("padding", "20px");
});

/* 
Alerts
*/
$("button").click(function() {
	alert($(this).attr("data-tmp"));
})