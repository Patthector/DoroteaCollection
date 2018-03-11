$(document).ready(function() {
  console.log("hellos");
  Min_height_piece();


  //
  //THE GRID
  //
  function CreatingTheGrid(){
    let grid = $("#grid__collage");
    let children = grid.children();
    for (let i = 0; i < children.length; i++) {
      ///SETTING THE HEIGHTS OF ALL THE CARDS
      //BuildingCard(children.eq(i));//get just the article
      var height = children.eq(i).height();
      console.log(height,height);
      let repetitions = Math.ceil(height / 10);/*10px*/
      //console.log(repetitions,height);
      children.eq(i).css(`grid-row-end`,`span ${repetitions}`);
    }
  }
  //Finding the min-heigh of pieces
  function Min_height_piece(){
    let piece__plate = $("#plate");
    let height = piece__plate.innerHeight();
    let piece = $(".piece");
    piece.css('min-height',height);
    console.log(height);
    console.log("plate");
  }
  /*
  $(window).on('load',function(){
    console.log("LOADING");
    CreatingTheGrid();
  })
  $(window).on('resize',function(){
    console.log("RESIZING");
    let main_display = $("main").css("display");
    if(main_display === "grid"){//if is the grid show the menu
      $("#nav").css("display","block");
    }
    else{
      $("#nav").css("display","none");
    }
    CreatingTheGrid();
  })
  $(window).on('orientationchange',function(){
    console.log("ORIENTATIONCHANGE");
    let main_display = $("main").css("display");
    if(main_display === "grid"){//if is the grid show the menu
      $("#nav").css("display","block");
    }
    else{
      $("#nav").css("display","none");
    }
    CreatingTheGrid();
  })
  */
CreatingTheGrid();

//CAROUSEL-SWIPE
  $(".carousel").carousel({
  swipe: 30 // percent-per-second, default is 50. Pass false to disable swipe
  });

});
