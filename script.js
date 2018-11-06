let i=0;
const allQuotes=['First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.',
  'You may be disappointed if you fail, but you are doomed if you don’t try.',
  'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
  'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.'
  ];
const change= {
  quotes:allQuotes,
  author:['Aristotle','Beverly Sills',' Helen Keller','Robert Frost'],
  backgroundColor:["rgb(22,160,133)",'rgb(251,105,100)','rgb(119,177,169)','rgb(71,46,50)']
}
function trya(){

  $(document).ready(function(){
    $("#quote-text").text(change.quotes[i++]);
    $("#author-name").text(change.author[i-1]);
    $('body').css('background-color',change.backgroundColor[i-1]);
    $('#text').css('color',change.backgroundColor[i-1]);
    $('#author').css('color',change.backgroundColor[i-1]);
    $('#button').css('background-color',change.backgroundColor[i-1]);
    $('.icon').css('color',change.backgroundColor[i-1]);
  });
  if(i===allQuotes.length){
      i=0;
  }
}
