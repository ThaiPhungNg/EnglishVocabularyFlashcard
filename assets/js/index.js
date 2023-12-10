
function scrollToStartSection(){
    document.getElementById('start_section').scrollIntoView();
}

// ---------------------------data storage-----------------
const specialCardData = [
    {
      imgSrc: "./assets/imgs/bb.png",
      videoSrc: "./assets/imgs/I.webm",
      lessons: "32 lessons - 618 words",
      title: "Bank",
      description: "You can write very acceptable texts about most subjects, and talk about a variety of topics inside or outside your own field."
    },
    {
      imgSrc: "./assets/imgs/mm.png",
      videoSrc: "./assets/imgs/K.webm",
      lessons: "32 lessons - 618 words",
      title: "Mechanical Engineering",
      description: "You can officially be called a 'bilingual', comprehend everything written or spoken and more."
    },
    {
    imgSrc: "./assets/imgs/tt.png",
        videoSrc: "./assets/imgs/G.webm",
        lessons: "32 lessons - 618 words",
        title: "Technology",
        description: "You can write very acceptable texts about most subjects, and talk about a variety of topics inside or outside your own field."
    },
    {
        imgSrc: "./assets/imgs/mm.png",
        videoSrc: "./assets/imgs/H.webm",
        lessons: "32 lessons - 618 words",
        title: "Marketing",
        description: "You can officially be called a 'bilingual', comprehend everything written or spoken and is equal to an educated English speaker."
      }
  ];

  const cefrCardData = [
    {
      imgSrc: "./assets/imgs/A1.png",
      videoSrc: "./assets/imgs/N.webm",
      lessons: "8 lessons - 618 words",
      title: "Beginner",
      description: "You can understand very short, simple texts and use common everyday language and very basic vocabulary."
    },
    {
      imgSrc: "./assets/imgs/A2.png",
      videoSrc: "./assets/imgs/B.webm",
      lessons: "32 lessons - 618 words",
      title: "Elementary",
      description: "You have learned the basics of English and can communicate with others about simple and everyday subjects."
    },
    {
      imgSrc: "./assets/imgs/B1.png",
      videoSrc: "./assets/imgs/C.webm",
      lessons: "32 lessons - 618 words",
      title: "Intermediate",
      description: "You can communicate in a limited way about common subjects, somehow manage to understand more specific information."
    },
    {
      imgSrc: "./assets/imgs/B2.png",
      videoSrc: "./assets/imgs/D.webm",
      lessons: "32 lessons - 618 words",
      title: "Upper-Intermediate",
      description: "You can comprehend the main points of longer and more difficult texts, express your opinions."
    },
    {
      imgSrc: "./assets/imgs/C1.png",
      videoSrc: "./assets/imgs/E.webm",
      lessons: "32 lessons - 618 words",
      title: "Advanced",
      description: "You can write very acceptable texts about most subjects, and talk about a variety of topics inside or outside your own field."
    },
    {
      imgSrc: "./assets/imgs/C2.png",
      videoSrc: "./assets/imgs/F.webm",
      lessons: "32 lessons - 618 words",
      title: "Proficient",
      description: "You can officially be called a 'bilingual', comprehend everything written or spoken and is equal to an educated English speaker."
    }
  
  ];


  const idiomCardData = [
    {
      imgSrc: "./assets/imgs/ss.png",
      videoSrc: "./assets/imgs/L.webm",
      lessons: "32 lessons - 618 words",
      title: "Success",
      description: "You can write very acceptable texts about most subjects and talk about a variety of topics inside or outside your own field."
    },
    {
      imgSrc: "./assets/imgs/ff.png",
      videoSrc: "./assets/imgs/M.webm",
      lessons: "32 lessons - 618 words",
      title: "Failure",
      description: "You can officially be called a 'bilingual', comprehend everything written or spoken and is equal to an educated English speaker."
    },
    {
      imgSrc: "./assets/imgs/ii.png",
      videoSrc: "./assets/imgs/O.webm",
      lessons: "32 lessons - 618 words",
      title: "Interactions",
      description: "You can write very acceptable texts about most subjects and talk about a variety of topics inside or outside your own field."
    },
    {
      imgSrc: "./assets/imgs/pp.png",
      videoSrc: "./assets/imgs/A.webm",
      lessons: "32 lessons - 618 words",
      title: "Personality",
      description: "You can officially be called a 'bilingual', comprehend everything written or spoken and is equal to an educated English speaker."
    }
    // Add more objects for additional idiom cards as needed
  ];



// ------------------------render 3 types cards-----------------------

  // Function to create a specialized card
  function createCard(data) {
    const card = document.createElement("div");
    card.className = "col-3 specialised";
    card.innerHTML = `
      <div class="card card_theme" data-category="specialised">
        <div class="outer_card">
          <div class="pics">
            <img src="${data.imgSrc}" class="outer_img">
            <video src="${data.videoSrc}" autoplay="autoplay" muted loop class="inner_img"></video>
            <h class="inner_txt">${data.lessons}</h>
          </div>
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.description}</p>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  // Render specialized cards
  const container = document.getElementById("all-cards-container");
  specialCardData.forEach(data => {
    const card = createCard(data);
    container.appendChild(card);
  });

  

  function createCefrCard(data) {
    const card = document.createElement("div");
    card.className = "col-3 CEFR";
    card.innerHTML = `
      <div class="card card_theme" data-category="CEFR">
        <div class="outer_card">
          <div class="pics">
            <img src="${data.imgSrc}" class="outer_img">
            <video src="${data.videoSrc}" autoplay="autoplay" muted loop class="inner_img"></video>
            <h class="inner_txt">${data.lessons}</h>
          </div>
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.description}</p>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  // Render CEFR cards
  
  cefrCardData.forEach(data => {
    const card = createCefrCard(data);
    container.appendChild(card);
  });

  function createIdiomCard(data) {
    const card = document.createElement("div");
    card.className = "col-3 idioms";
    card.innerHTML = `
      <div class="card card_theme" data-category="idioms">
        <div class="outer_card">
          <div class="pics">
            <img src="${data.imgSrc}" class="outer_img">
            <video src="${data.videoSrc}" autoplay="autoplay" muted loop class="inner_img"></video>
            <h class="inner_txt">${data.lessons}</h>
          </div>
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.description}</p>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  // Render idiom cards
  idiomCardData.forEach(data => {
    const card = createIdiomCard(data);
    container.appendChild(card);
  });








 //----------------------- hover card color change------------
const colors = ['#3C865D', '#AD7409', '#5D7D9C', '#C65A3C', ];
const boxes = document.querySelectorAll('.card_theme');

boxes.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = colors[index % colors.length];
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = '';
    });
});

//----------------------- filtering options------------

filterSelection("all");// Execute the function and show all columns

function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("col-3");
    if(c == "all") c="";
     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for( i =0; i < x.length; i++){
        removeClass(x[i],"show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i],"show")
    }

}
// SHow filtered elements
function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for( i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}

//---------- Attach a click event for each card-----
var cards = document.querySelectorAll('.card_theme');
cards.forEach(function(card) {
  card.addEventListener('click', function() {
        window.location.assign("http://127.0.0.1:5500/subTheme.html");
  });
});



