'use stric'

let animation = Array.from(document.getElementsByClassName('animation-box'));

let content = Array.from(document.getElementsByClassName('content'));

let pointMove = Array.from(document.getElementsByClassName('part'));
console.log(pointMove);

let pointMovePosition = [
						pointMove[0].getBoundingClientRect().top,
						pointMove[1].getBoundingClientRect().top,
						pointMove[2].getBoundingClientRect().top,
						pointMove[3].getBoundingClientRect().top,
						pointMove[4].getBoundingClientRect().top,
						pointMove[5].getBoundingClientRect().top,
						pointMove[6].getBoundingClientRect().top,
						pointMove[7].getBoundingClientRect().top,
						pointMove[8].getBoundingClientRect().top,
						pointMove[9].getBoundingClientRect().top,
						pointMove[10].getBoundingClientRect().top,
						pointMove[11].getBoundingClientRect().top,
						pointMove[12].getBoundingClientRect().top,
						];
console.log(pointMovePosition);


window.addEventListener('scroll', () => {
	let position = Math.round(window.pageYOffset);
	console.log(position);

	for( let i = 0; i < 13; i++ ){
		if( pointMovePosition[i] - position < 100 ){
			animation[i].style.width = 100 + '%';
			animation[i].style.height = 100 + '%';
			animation[i].style.padding = 100 + 'px';
		} else {
			animation[i].style.width = 100 + 'px';
			animation[i].style.height = 100 + 'px';
			animation[i].style.padding = 0 + 'px';
		}
		if( animation[i].style.height == 100 + '%'){
			content[i].style.opacity = 1;
		} else {
			content[i].style.opacity = 0;
		}
	}
})
/*
for( let i = 0; i < 7; i++ ){
	pointMovePosition[i].addEventListener('scroll', () => {
		if( pointMovePosition[i] - position < 140 ){
		animationanimation[i].style.width = 100 + '%';
		animation[i].style.height = 100 + '%';
		animation[i].style.padding = 100 + 'px';
		}
		if( animation[i].style.height == 100 + '%'){
			content[i].style.opacity = 1;
		}
		})
}
/*for( let i = 0; i < 7; i++){
	pointMove[i].addEventListener('scroll', () => {
		if( pointMovePosition[i] - position < 140 ){
		animationanimation[i].style.width = 100 + '%';
		animation[i].style.height = 100 + '%';
		animation[i].style.padding = 100 + 'px';
			if( animation[i].style.height == 100 + '%'){
			content[i].style.opacity = 1;
			}
		}
	})
}
































/*for( let i = 0; i < 7; i ++ ) {
	animation[i].addEventListener('click', () => {
		animation[i].style.width = 100 + '%';
		animation[i].style.height = 100 + '%';
		animation[i].style.padding = 100 + 'px';
		content[i].style.opacity = 1;
	})
}

for( let i = 0; i < 7; i++ ){
	animation[i].getBoundingClientRect().top;
	//console.log(animation[i].getBoundingClientRect().top);
	let pos =window.pageYOffset;
	//console.log(animation[0].getBoundingClientRect().top - pos >= 50 );
}

window.addEventListener('scroll', () => {
	let position =  Math.round(window.pageYOffset);
	console.log(pointMove[1].getBoundingClientRect().top - position);
	//console.log(position);
	for( let i = 0; i < 7; i++){
		//let visible = animation[i].getBoundingClientRect().top - position;
		//console.log(visible);
		//console.log( animation[i].getBoundingClientRect().top - position );
		//console.log( position - animation[i].getBoundingClientRect().top > 200);
		if( pointMove[i].getBoundingClientRect().top - position < 120 && pointMove[i].getBoundingClientRect().top - position > 200 ){
			animation[i].style.width = 100 + '%';
			animation[i].style.height = 100 + '%';
			animation[i].style.padding = 100 + 'px';
			content[i].style.opacity = 1;
		} else if( position - pointMove[i].getBoundingClientRect().top > 200 && position - pointMove[i].getBoundingClientRect().top > 120){
			animation[i].style.width = 100 + 'px';
			animation[i].style.height = 100 + 'px';
			animation[i].style.padding = 0 + 'px';
			content[i].style.opacity = 0;
		}
	}
	/*for( let i = 0; i < 7; i++){
		let visible = animation[i].getBoundingClientRect().top - position;
		console.log(visible); 
	}
	if( visible )*/
//})
/*console.log(window.pageYOffset);
	window.addEventListener('scroll', () => {
		let pos = window.pageYOffset;
		console.log(pos);
		
		if( animation[0].getBoundingClientRect().top - pos >= 100 ){
			animation[0].style.width = 100 + '%';
			animation[0].style.height = 100 + '%';
			animation[0].style.padding = 100 + 'px';
			content[0].style.opacity = 1;
		} else {
			animation[0].style.width = 100 + 'px';
			animation[0].style.height = 100 + 'px';
			animation[0].style.padding = 0 + 'px';
			content[0].style.opacity = 0;
		}

		if( animation[1].getBoundingClientRect().top - pos >= 100 ){
			animation[1].style.width = 100 + '%';
			animation[1].style.height = 100 + '%';
			animation[1].style.padding = 100 + 'px';
			content[1].style.opacity = 1;
		} else {
			animation[1].style.width = 100 + 'px';
			animation[1].style.height = 100 + 'px';
			animation[1].style.padding = 0 + 'px';
			content[1].style.opacity = 0;
		}

		if( animation[2].getBoundingClientRect().top - pos >= 100 ){
			animation[2].style.width = 100 + '%';
			animation[2].style.height = 100 + '%';
			animation[2].style.padding = 100 + 'px';
			content[2].style.opacity = 1;
		} else {
			animation[2].style.width = 100 + 'px';
			animation[2].style.height = 100 + 'px';
			animation[2].style.padding = 0 + 'px';
			content[2].style.opacity = 0;
		}

		if( animation[3].getBoundingClientRect().top - pos >= 100 ){
			animation[3].style.width = 100 + '%';
			animation[3].style.height = 100 + '%';
			animation[3].style.padding = 100 + 'px';
			content[3].style.opacity = 1;
		} else {
			animation[3].style.width = 100 + 'px';
			animation[3].style.height = 100 + 'px';
			animation[3].style.padding = 0 + 'px';
			content[3].style.opacity = 0;
		}

		if( animation[4].getBoundingClientRect().top - pos >= 100 ){
			animation[4].style.width = 100 + '%';
			animation[4].style.height = 100 + '%';
			animation[4].style.padding = 100 + 'px';
			content[4].style.opacity = 1;
		} else {
			animation[4].style.width = 100 + 'px';
			animation[4].style.height = 100 + 'px';
			animation[4].style.padding = 0 + 'px';
			content[4].style.opacity = 0;
		}

		if( animation[5].getBoundingClientRect().top - pos >= 100 ){
			animation[5].style.width = 100 + '%';
			animation[5].style.height = 100 + '%';
			animation[5].style.padding = 100 + 'px';
			content[5].style.opacity = 1;
		} else {
			animation[5].style.width = 100 + 'px';
			animation[5].style.height = 100 + 'px';
			animation[5].style.padding = 0 + 'px';
			content[5].style.opacity = 0;
		}

		if( animation[6].getBoundingClientRect().top - pos >= 100 ){
			animation[6].style.width = 100 + '%';
			animation[6].style.height = 100 + '%';
			animation[6].style.padding = 100 + 'px';
			content[6].style.opacity = 1;
		} else if( animation[6].getBoundingClientRect().bottom - pos + document.documentElement.clientHeight >= 100 ) {
			animation[6].style.width = 100 + 'px';
			animation[6].style.height = 100 + 'px';
			animation[6].style.padding = 0 + 'px';
			content[6].style.opacity = 0;
		}
	})

let test = document.getElementById('test');
test.addEventListener('click', () => {
	console.log(window.pageYOffset);
})
*/
