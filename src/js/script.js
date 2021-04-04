@@include('noUiSlider.js', {});

//Sub-Menu
let arrow = document.querySelector('.header__arrow');
let subList = document.querySelector('.header__sublist');
arrow.addEventListener('click', function () {
	arrow.classList.toggle('_active');
	subList.classList.toggle('_active-sublist');
});

let filter = document.getElementById('filter-title');
let list = document.querySelector('.shop__filter');
filter.addEventListener('click', function () {
	list.classList.toggle('_active');
});

//Burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav-global');

burger.addEventListener('click', function () {
	let active = burger.classList.toggle('_active');
	if (active) {
		document.body.style.overflow = 'hidden';
		menu.classList.toggle('_active');
	} else {
		document.body.style.overflow = 'visible';
		menu.classList.remove('_active');
	}
});
//Sidebar-menu
let btn = document.querySelector('.sidebar__filter-btn');
let sidebar = document.querySelector('.sidebar');
let filterArrow = document.querySelector('.sidebar-arrow');

btn.addEventListener('click', function () {
  sidebar.classList.add('_active');
  
});
filterArrow.addEventListener('click', function () {
  sidebar.classList.remove('_active');
});


//Filter

let sidebarArrow = document.querySelectorAll('.sidebar__arrow');
let sublist = document.querySelectorAll('.sidebar__sublist');

for (let i = 0; i < sublist.length; i++) {
	sidebarArrow[i].addEventListener('click', function () {
		sublist[i].classList.toggle('_active');
		sidebarArrow[i].classList.toggle('_active');
	});
}

//Range-slider
const rangeSlider = document.querySelectorAll('.sidebar__range');
const inputs = document.querySelectorAll('.sidebar__inputs');

if (rangeSlider) {
  for (let i = 0; i < rangeSlider.length; i++) {
    noUiSlider.create(rangeSlider[i], {
      start: [0, 100],
      connect: true,
      step: 1,
      range: {
        min: [0],
        max: [100],
      },
    });
    
    rangeSlider[i].noUiSlider.on('update', function (values, handle) {
      inputs[i].children[handle].value = Math.round(values[handle]);
    });
		const setRangeSlider = (j, value) => {
      let arr = [null, null];
      arr[j] = value;
      rangeSlider[i].noUiSlider.set(arr);
    };
    for (let index = 0; index < inputs[i].children.length; index++) {
      let el = inputs[i].children[index];
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    }
  }
}

/* //Srcoll
let scroll = document.querySelector('.luxury__scroll-btn[data-goto]');

scroll.addEventListener('click', function (e) {
	let btn = e.target;
	if (btn.dataset.goto && document.querySelector(btn.dataset.goto)) {
		let gotoBlock = document.querySelector(btn.dataset.goto);
		let gotoBlockValue =
			gotoBlock.getBoundingClientRect().top + pageYOffset;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth',
		});
		e.preventDefault();
	}
}); */

//Slider
new Swiper('.slider__container', {
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	//Navigation
	// Bullets, current position, progress bar
	pagination: {
		el: '.swiper-pagination',
		//Bullets
		clickable: true,
	},
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 600,
}); 
