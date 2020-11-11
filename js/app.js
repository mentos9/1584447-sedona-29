let buttons = document.querySelectorAll('input[type="button"]');
let sorting = document.getElementById('text_sorting');

let buttonData = Array.from(buttons).map((el, i) => {
  el.addEventListener('click', () => {
    const clicked = !buttonData[i].clicked;
    buttonData[i].clicked = clicked;
    if (clicked) {
      el.classList.add('highlighted');
    } else {
      el.classList.remove('highlighted');
    }
  });
  return {element: el, clicked: false}
});


let searchHostel = document.getElementById('search_hostel');
let search = document.getElementById('search_hostel_calendar');

if (searchHostel) {
searchHostel.addEventListener("click", function () {
  search.classList.toggle("visibility");
  console.log("1");
});
}

var aaa = $("#text_button_search_hostel");

aaa.click(function (event) {
  event.preventDefault();
  $('#form_search_hostel input').each(function (index, element) {
    if ($(element).val() == "") {
      $(element).addClass("error");

    } else {
      $(element).removeClass("error");
    }

  });
  if($('#form_search_hostel input.error').length == 0) {
    document.location.href="/sedona-29/seach.html";
  }else {
    console.log("ошибка");
  }

})

