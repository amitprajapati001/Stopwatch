let hr_el = document.getElementById("hr");
let min_el = document.getElementById("min");
let sec_el = document.getElementById("sec");
let startBtn = document.getElementById("start");
let stoptBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

hr_el.innerHTML = `${0} hr :`;
min_el.innerHTML = `${0} min :`;
sec_el.innerHTML = `${0} sec`;
let s = 0;
let h = 0;
let m = 0;
let id = 0;

let stopwatch_cheker = false;

startBtn.addEventListener("click", function () {
  if (stopwatch_cheker == false) {
    id = setInterval(function () {
      s = s + 1;
      if (s == 60) {
        m = m + 1;
        s = 0;
        if (m == 60) {
          h = h + 1;
          m = 0;
          s = 0;
        }
      }
      hr_el.innerHTML = `${h} hr :`;
      min_el.innerHTML = `${m} min :`;
      sec_el.innerHTML = `${s} sec`;
    }, 1000);

    stopwatch_cheker = true;
  }
});

stoptBtn.addEventListener("click", function () {
  clearInterval(id);
  hr_el.innerHTML = `${h} hr :`;
  min_el.innerHTML = `${m} min :`;
  sec_el.innerHTML = `${s} sec`;
  stopwatch_cheker = false;
});

resetBtn.addEventListener("click", function () {
  clearInterval(id);
  h = 0;
  m = 0;
  s = 0;
  hr_el.innerHTML = `${h} hr :`;
  min_el.innerHTML = `${m} min :`;
  sec_el.innerHTML = `${s} sec`;
  stopwatch_cheker = false;
});
