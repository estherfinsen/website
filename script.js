window.addEventListener("load", sidenVises);
let point;
let life;

const rotte = document.querySelector("#rotte_container");
const lort = document.querySelector("#lort_container");
const salat = document.querySelector("#salat_container");
const tomat = document.querySelector("#tomat_container");
const logring = document.querySelector("#log_container");
const bof = document.querySelector("#bof_container");
const underbol = document.querySelector("#underbol_container");
const overbol = document.querySelector("#overbol_container");
const pom1 = document.querySelector("#pom1_container");
const pom2 = document.querySelector("#pom2_container");
const pom3 = document.querySelector("#pom3_container");
const pom4 = document.querySelector("#pom4_container");
const pom5 = document.querySelector("#pom5_container");
const pom6 = document.querySelector("#pom6_container");
const pom7 = document.querySelector("#pom7_container");

function sidenVises() {
  console.log("sidenVises");
  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap (tilføj i eget spil)
  document.querySelector("#start_knap").addEventListener("click", startSpil);
}

function startSpil() {
  console.log("startSpil");

  point = 0;
  document.querySelector("#score_board").innerHTML = "POINT: " + point;

  life = 3;
  document.querySelector("#life_board").innerHTML = "LIV: " + life;

  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");

  document.querySelector("#minut_viser").classList.add("minut_animation");
  document.querySelector("#minut_viser").addEventListener("animationend", stopSpillet);

  /***rotte */
  rotte.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  rotte.addEventListener("mousedown", clickDorligHandler);
  rotte.addEventListener("animationiteration", dorligReset);

  /***lort******/
  lort.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  lort.addEventListener("mousedown", clickDorligHandler);
  lort.addEventListener("animationiteration", dorligReset);

  /***salat*****/
  salat.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  salat.addEventListener("mousedown", clickGodHandler);
  salat.addEventListener("animationiteration", godReset);

  /***tomat*******/
  tomat.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  tomat.addEventListener("mousedown", clickGodHandler);
  tomat.addEventListener("animationiteration", godReset);

  /***log*******/
  logring.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  logring.addEventListener("mousedown", clickGodHandler);
  logring.addEventListener("animationiteration", godReset);

  /***bof*******/
  bof.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  bof.addEventListener("mousedown", clickGodHandler);
  bof.addEventListener("animationiteration", godReset);

  /***underbol*******/
  underbol.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  underbol.addEventListener("mousedown", clickGodHandler);
  underbol.addEventListener("animationiteration", godReset);

  /***overbol*******/
  overbol.classList.add("pos" + nytRandomTal(9), "falling", "delay" + nytRandomTal(8));
  overbol.addEventListener("mousedown", clickGodHandler);
  overbol.addEventListener("animationiteration", godReset);
}

/*************   GOD   ****************/
function clickGodHandler() {
  point++;
  console.log(point);

  document.querySelector("#score_board").innerHTML = "POINT: " + point;

  this.removeEventListener("mousedown", clickGodHandler);
  this.classList.add("frys");
  this.firstElementChild.classList.add("zoom_out");
  this.addEventListener("animationend", godReset);

  document.querySelector("#mmmhh").currenttime = 0;
  document.querySelector("#mmmhh").play();
  document.querySelector("#mmmhh").volume = 0.8;
}

function godReset() {
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;
  this.addEventListener("mousedown", clickGodHandler);
  this.classList.add("falling", "pos" + nytRandomTal(9));
}

/***************Dorlig************/
function dorligReset() {
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetLeft;
  this.addEventListener("mousedown", clickDorligHandler);
  this.classList.add("falling", "pos" + nytRandomTal(9));
}

function clickDorligHandler() {
  life--;
  console.log(life);
  document.querySelector("#life_board").innerHTML = "LIV: " + life;

  this.removeEventListener("mousedown", clickDorligHandler);
  this.classList.add("frys");
  this.firstElementChild.classList.add("zoom_in");
  this.addEventListener("animationend", dorligReset);

  document.querySelector("#ad").currenttime = 0;
  document.querySelector("#ad").play();
  document.querySelector("#ad").volume = 0.8;

  if (life <= 0) {
    console.log("ikke flere life");
    stopSpillet();
  }
}

/*************STOP**************/

function stopSpillet() {
  console.log("stopSpillet");

  document.querySelector("#minut_viser").classList.remove("minut_animation");
  document.querySelector("#minut_viser").removeEventListener("animationend", stopSpillet);
  /*****ROTTE */
  rotte.classList = "";
  rotte.firstElementChild.classList = "";
  rotte.removeEventListener("animationend", dorligReset);
  rotte.removeEventListener("mousedown", clickDorligHandler);

  /*****LORT */
  lort.classList = "";
  lort.firstElementChild.classList = "";
  lort.removeEventListener("animationend", dorligReset);
  lort.removeEventListener("mousedown", clickDorligHandler);

  /****SALAT */
  salat.classList = "";
  salat.firstElementChild.classList = "";
  salat.removeEventListener("animationend", godReset);
  salat.removeEventListener("mousedown", clickGodHandler);

  /****tomat */
  tomat.classList = "";
  tomat.firstElementChild.classList = "";
  tomat.removeEventListener("animationend", godReset);
  tomat.removeEventListener("mousedown", clickGodHandler);

  /****log */
  logring.classList = "";
  logring.firstElementChild.classList = "";
  logring.removeEventListener("animationend", godReset);
  logring.removeEventListener("mousedown", clickGodHandler);

  /****bof */
  bof.classList = "";
  bof.firstElementChild.classList = "";
  bof.removeEventListener("animationend", godReset);
  bof.removeEventListener("mousedown", clickGodHandler);

  /****underbol */
  underbol.classList = "";
  underbol.firstElementChild.classList = "";
  underbol.removeEventListener("animationend", godReset);
  underbol.removeEventListener("mousedown", clickGodHandler);

  /****overbol */
  overbol.classList = "";
  overbol.firstElementChild.classList = "";
  overbol.removeEventListener("animationend", godReset);
  overbol.removeEventListener("mousedown", clickGodHandler);

  if (life <= 0) {
    gameover();
  } else if (point >= 20) {
    levelComplete();
  } else {
    gameover();
  }
}

/*************GAME OVER****** */
function gameover() {
  console.log("GAMEOVER loser L");
  document.querySelector("#opkast").play();
  document.querySelector("#opkast").volume = 0.8;

  //Vis gameover skærm
  document.querySelector("#game_background").classList.add("hide");
  document.querySelector("#game_over").classList.remove("hide");

  //Klik på genstart
  document.querySelector("#genstart").addEventListener("click", startSpil);
  document.querySelector("#game_background").classList.remove("hide");
}

function levelComplete() {
  console.log("");
  document.querySelector("#vundet").play();
  document.querySelector("#vundet").volume = 0.8;
  pom1.classList.add("poss" + nytRandomTal(7), "falling");
  pom2.classList.add("poss" + nytRandomTal(7), "falling");
  pom3.classList.add("poss" + nytRandomTal(7), "falling");
  pom4.classList.add("poss" + nytRandomTal(7), "falling");
  pom5.classList.add("poss" + nytRandomTal(7), "falling");
  pom6.classList.add("poss" + nytRandomTal(7), "falling");
  pom7.classList.add("poss" + nytRandomTal(7), "falling");

  //Vis levelComplete skærm
  document.querySelector("#game_background").classList.add("hide");
  document.querySelector("#level_complete").classList.remove("hide");

  //Klik på genstart
  document.querySelector("#genstart2").addEventListener("click", startSpil);
  document.querySelector("#game_background").classList.remove("hide");
}

function nytRandomTal(max) {
  return Math.floor(Math.random() * max) + 1;
}
