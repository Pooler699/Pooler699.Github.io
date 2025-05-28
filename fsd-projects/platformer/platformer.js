$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
       toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 200, 100, 20);
    createPlatform(200, 500, 100, 20);
    createPlatform(450, 400, 50, 20);
    createPlatform(650, 300, 50, 20);
    createPlatform(500, 200, 25, 20);
    createPlatform(1000, 575, 25, 20);
    createPlatform(1100, 450, 100, 20);
     createPlatform(1300, 675, 20, 20);


    
    




    // TODO 3 - Create Collectables
    createCollectable("diamond", 225, 450, 0);
    createCollectable("diamond", 495, 150, 0);
    createCollectable("diamond", 1125, 405, 0);



    
    // TODO 4 - Create Cannons
    createCannon("left", 640, 100)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
