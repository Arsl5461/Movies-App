const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// box
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
// Get initial movies


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}





// search 

const search1 = document.querySelector('.search1')
const btn1 = document.querySelector('.btn1')
const input1 = document.querySelector('.input1')

btn1.addEventListener('click', () => {
    search1.classList.toggle('active')
    input1.focus();
})



getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       console.log("Enter key is pressed");
       return true;
    } else {
       return false;
    }
 }


form.addEventListener('keyup', (e) => {
    if (event.keyCode == 13) {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }}
})


    const toggle = document.getElementById('toggle')
    const nav = document.getElementById('nav')

    toggle.addEventListener('click', () => nav.classList.toggle('active'))


// testinomial
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Ruthless and precise, Steven Soderberghs “KIMI” is a timely commentary on isolation and intrusion. Anchored by a striking performance from Zoë Kravitz, it sees the expert craftsman working with genre again, like how he did in “Side Effects” and “Unsane,” taking a classic concept right out of “Rear Window” or “Blow Out” and making it current to the era of Covid-19 and Alexa. Some of the final act of David Koepps script gets too far out there, and the whole thing wraps a little tidily for a film thats largely about how even an agoraphobic cant actually be alone, but theres no denying that this is a taut, fun exercise. KIMI is a brilliantly paced, no-nonsense gem from one of the best American filmmakers.",
  },
  {
    name: 'June Cha',
    position: 'Doctor',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'One day, Angela is going through her errors and hears something truly disturbing. Behind a wall of music, theres what sounds like a scream and a struggle. Shes tech-savvy enough to play with the sound and isolate the human element, which leads her down a rabbit hole of increasing mortal danger. Not only has she caught something horrifying recorded on a KIMI, but its actually (and, yes, this is a bit of a coincidence that viewers just have to run with) related to the company for which she works, one that wants all of this, including some of the tech secrets of KIMI it could reveal, to go away right now.',
  },
  {
    name: 'Iida Niskanen',
    position: 'Teacher',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "“Bel-Air,” the newest drama on the streaming service Peacock, has one of the most unusual origin stories in the history of television. Perhaps because of this odd history, it struggles to develop its own identity in the first two episodes, too content to mimic what people have liked before instead of creating something new. However, the third episode hints at what “Bel-Air” could, and likely will, end up being once it gets the nostalgia out of the way, and I wished I could see more episodes before coming to a conclusion on this unique project. For two hours, I was ready to write it off as a misfire, and there are still some writing issues that hamper all three chapters, but you start to see how “Bel-Air” could eventually ascend to a television throne of its own, not supplanting its inspiration but ruling a different empire altogether.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "The writing on “Bel-Air” also has a tendency to underline its themes with all the subtlety of a “Very Special Episode.” Every time it flirts with serious subject matter like how class and race influence relationship in politics—or how those things differ in Philly and Bel-Air—it does so with a dispiriting lack of subtlety. It’s one of those shows where characters too often sound like mouthpieces for writers instead of real people. They’re too often explicitly stating their messages instead of conveying dialogue that sounds realistic.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Ultimately, the delusional starring role is reserved for the filmmaker’s dad Patrick, whose dreams are fired by the invitation to the Clermont-Ferrand Film Festival, to appear with his daughter’s short documentary. The adventure is provocative, funny, and goofy, a family in-joke turned inside-out for the world’s consumption, and a fine testament to the career-making, transformative power of a film festival.",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'The parallelism between Jane and Emma’s story is, of course, the point: while separated by time and, we quickly learn, death (Emma died in that apartment three years before Jane took the place), the two women follow eerily similar paths. Both are Black women of similar height and features, carrying a resemblance that becomes ever more purposeful as they both enter into dangerous relationships with Edward—himself compensating for the loss of a loved one in his own highly-controlling way. Is that why Emma died three years ago?, wonders Jane (as do we).  ',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Farhadi shoots and cuts his story with his usual admirable dispatch, never erring in his camera placement or staging. That said, his script is hardly as seamless as it aspires to be. I frequently got the sense that Farhadi wrote the story’s varied poor outcomes for Rahim first, then retconned the traps that he almost habitually steps into, to reach the not-quite-resolution that’s a hallmark of Farhadi’s work.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)


// expending cards 
const panels = document.querySelectorAll('.panel');
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}


// footer 
$(function () {

	var wrapper = $('.wrapper');
	var windowObj = $(window);

	function decreaseWrapper () {
		wrapper.addClass('small');
	}

	function increaseWrapper () {
		wrapper.removeClass('small');
	}

	windowObj.scroll(function () {
		if ( $(this).scrollTop() + $(this).height() > wrapper.outerHeight() ){
			decreaseWrapper();
		} else {
			increaseWrapper();
		}
	});


	$('.wrapper').on('click', 'small', function () {
		$('.wrapper').animate({
			scrollTop: wrapper.outerHeight() - windowObj.height()
		}, 500);
	});

});