const topGuy = document.querySelector('.top_guy');

const handleHover = () => {
	topGuy.src = 'img/1/1hover.png';
};

const handleHoverOut = () => {
	topGuy.src = 'img/1/1.png';
};

topGuy.addEventListener('mouseover', handleHover);
topGuy.addEventListener('mouseout', handleHoverOut);
