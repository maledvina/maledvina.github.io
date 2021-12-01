$(window).load(function() {
  $(".wrapper").removeClass("nopre");
});

$('#container > div').click(function(){
  if ($('#container').attr('class') == $(this).attr('id')) {
    $('#container').removeClass();
  } else {
    $('#container').removeClass().addClass($(this).attr('id'));
  }
});

$('#container > div > ul').click(function(e){
  e.stopPropagation();
});

var words = ['cycling','tennis','cooking', 'my cat, Freckles', 'overly fancy drinks', 'radio headphones', 'creeks with small bridges' , 'certified dark skies','bossa nova', 'sweatshirts with hoods', 'one strap sling bags', 'middle-grade graphic novels', 'over-curating playlists', 'glow in the dark stars', 'the movie Cheaper By The Dozen with Steve Martin'  ],
    currentStep = 0,
    textEl = document.querySelector('.change-text'),
    oldWord = '';


setTimeout(changeWord, 1000);

function changeWord() {
  oldWord = textEl.innerHTML;
  
  // check if there is a word atm or not
  if (oldWord.length < 1) {

    if (currentStep !== words.length -1) {
          currentStep ++;
    }else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 800);
  }
  
};

function deleteWord() {
  var WordLength = oldWord.length,
      currentWord = textEl.innerHTML,
      currentLength = currentWord.length;
  

  // The word is deleted so, start adding in the new one
  if (currentLength < 1) {
    changeWord();
    return;
  }
  
  // Remove a charachter
  textEl.innerHTML = currentWord.substring(0, currentLength - 1);
  
  setTimeout(deleteWord, 200);
}

function addNextWord() {
  var currentWord = textEl.innerHTML,
      currentLength = currentWord.length,
      nextWord = words[currentStep],
      nextWordLength = nextWord.length;
    
  
  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }
  
  // add a charachter
  textEl.innerHTML = nextWord.substring(0, currentLength + 1);
    
  setTimeout(addNextWord, 200);
  
  
}














var words2 = ['UX/UI Researcher','Web Developer Intern','Web Development Team Manager', 'Tennis Pro Shop Manager', 'Assistant Cooking Instructor', 'Historical Haunted House Docent', 'Ceramics Coach' , 'Pumpkin Patch Manager','School Picture Photographer', 'Tennis Instructor', 'Parking Attendant', 'Housekeeper', 'Custard Maker', 'Middle School Mentor', 'Noodles and Company Crew Member'  ],
    currentStep2 = 0,
    textEl2 = document.querySelector('.change-text2'),
    oldWord2 = '';


setTimeout(changeWord2, 100);

function changeWord2() {
  oldWord2 = textEl2.innerHTML;
  
  // check if there is a word atm or not
  if (oldWord2.length < 1) {

    if (currentStep2 !== words2.length -1) {
          currentStep2 ++;
    }else {
      currentStep2 = 0;
    }
    addNextWord2();
  } else {
    setTimeout(deleteWord2, 100);
  }
  
};

function deleteWord2() {
  var WordLength2 = oldWord2.length,
      currentWord2 = textEl2.innerHTML,
      currentLength2 = currentWord2.length;
  

  // The word is deleted so, start adding in the new one
  if (currentLength2 < 1) {
    changeWord2();
    return;
  }
  
  // Remove a charachter
  textEl2.innerHTML = currentWord2.substring(0, currentLength2 - 1);
  
  setTimeout(deleteWord2, 150);
}

function addNextWord2() {
  var currentWord2 = textEl2.innerHTML,
      currentLength2 = currentWord2.length,
      nextWord2 = words2[currentStep2],
      nextWordLength2 = nextWord2.length;
    
  
  if (currentLength2 === nextWordLength2) {
    changeWord2();
    return;
  }
  
  // add a charachter
  textEl2.innerHTML = nextWord2.substring(0, currentLength2 + 1);
    
  setTimeout(addNextWord2, 200);
  
  
}



