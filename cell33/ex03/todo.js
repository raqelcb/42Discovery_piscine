function addItem(){
	var text=document.getElementById('objective').value;
	if(text.length>0){
		var list = new Date();
		setCookie('obj'+list.getTime(),encodeURIComponent(text));
		addListItem('obj'+list.getTime(),text);
		document.getElementById('objective').value='';
	}
	prompt ("This is a prompt box", "Add to the list");  
	function enter(e, input){
	var code = (e.keyCode ? e.keyCode : e.which);
	if(code == 13) {
		addItem();
	}
}
}

function setCookie(sName, sValue){
	document.cookie = sName + '=' + escape(sValue);
	var date = new Date();
	date.setMonth(date.getYear()+1);
	document.cookie += ('; expires=' + date.toUTCString()); 
}

function unsetCookie(sName){
	document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}

function checkForObjectives(){
	var list=document.getElementById('list');
	var cookies = document.cookie.split('; ');
	cookies.sort();
	for (var i=0; i < cookies.length; i++){
		var part = cookies[i].split('=');
		if(part[0].indexOf('obj')===0){
		try{
			addListItem(part[0],decodeURI(decodeURI(part[1])));
			}
			catch(error){
				console.log(error.message+' '+part[1]);
			}
		}
	}
}

function addListItem(id,text){
	var list = document.getElementById('list');
	list.innerHTML+='<li id='+id+'>'+text+' <button onclick="deleteItem(\''+id+'\')">X</button></li>';
}

function deleteItem(id){
if (confirm("¿Quieres borrarlo?"))
{
  document.getElementById(id).style.display='none';
	  unsetCookie(id);
}}