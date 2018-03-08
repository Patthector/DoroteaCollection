$(document).ready(function() {
  console.log("hellos");
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
  //
  //END OF THE GRID
  //
  //CreatingTheGrid();
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

});
