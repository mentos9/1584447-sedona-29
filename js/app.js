let buttons = document.querySelectorAll('input[type="button"]');
let sorting = document.getElementById('text_sorting');

let buttonData = Array.from(buttons).map((el, i) => {
  el.addEventListener('click', ()=>{
    const clicked = !buttonData[i].clicked;
    buttonData[i].clicked = clicked;
    if(clicked){
      el.classList.add('highlighted');
    } else {
      el.classList.remove('highlighted');
    }
  });
  return {element: el, clicked:false}
});

buttonData.forEach((btn, i) => {

});
