var backgrounds = ["green", "blue", "red"];
var reversedBackgrounds = ["red", "blue", "green"];
var width = 200;
var height = 200;

function changeInflate(el) {
	if (width && height <= 410)
	{
		el.colorIdx = el.colorIdx || 0;
		el.style.backgroundColor = backgrounds[el.colorIdx++ % backgrounds.length];
		width += 10;
		height += 10;
		el.style.width = width +"px";
		el.style.height = height +"px";
	}
	else
	{
		width = 200;
		height = 200;
	}
}

function changeDeflate(el) {
	if(width && height > 200)
	{
		el.colorIdx = el.colorIdx || 0;
		el.style.backgroundColor = reversedBackgrounds[el.colorIdx++ % backgrounds.length];
		width -=5;
		height -=5;
		el.style.width = width +"px";
		el.style.height = height +"px";
	}
}