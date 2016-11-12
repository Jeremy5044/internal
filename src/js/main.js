import $ from 'jquery';

console.log("load");
var list = $(".list")

var jax = $.ajax({
	url:'https://randomuser.me/api/?results=12',
	dataType:'json',
	success: listForm

});
console.log(listForm)



function listForm (object) {
	for(var i=0; i < object.results.length; i++){
		var result = object.results[i];
		var listHTML = listTemplate(result);
		list.append(listHTML);
	}
	console.log(object)
}

// listTemplate()

function listTemplate (prop){
var HTML=`
<div class= "format">
<img src="${prop.picture.large}" class="picture">
<div class= "name">${prop.name.first}${prop.name.last}</div>
<div class="email">${prop.email}</div>
<div class="street">${prop.location.street}</div>
<div class="number">${prop.cell}</div>
<div class="SSN">${prop.id.value}</div>


</div>
`;


return HTML;

}