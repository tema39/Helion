$(document).ready(function(){
  
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const container = $('.trading__style-container');
  const track = $('.score__list');
  const item = $('.score__list-item');
  const btnPrev =$('.btn__Prev');
  const btnNext = $('.btn__Next');
  const itemsCount = item.length;
  const itemWidth = container.width() / slidesToShow ;
  const movePosition = slidesToScroll * itemWidth;

  console.log(slidesToShow);
  item.each(function (index, item){
      $(item).css({
          minWidth: itemWidth,
      });
  });

  btnPrev.click(function(){
    const itemsLeft = Math.abs(position) / itemWidth;
    
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checkBtns();
  });

  btnNext.click(function(){
    const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    
    setPosition();
    checkBtns();
});
const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
};
const checkBtns = () => {
  btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
  btnPrev.prop('disabled', position === 0);
};

checkBtns();
});