function	random_color()
{
	var	letters;
	var	color;
	var	i;

	letters = '0123456789ABCDEF';
	color = '#';
	i = 0;
	while (i < 6)
	{
		color += letters[Math.floor(Math.random() * 16)];
		i++;
	}
	return (color);
}

function	change_color()
{
	document.body.style.backgroundColor = random_color();
}