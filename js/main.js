const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content items
function selectItem(e){
  removeBorder();
  removeShow();
  //Add border to current tabs
  this.classList.add('tab-border');
  //Grab content items from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show class
  tabContentItem.classList.add('show');



  }

//Listen for tab click
function removeBorder(){
  tabItems.forEach(item=>item.classList.remove('tab-border'));
}
function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'));
}
tabItems.forEach(item=>item.addEventListener('click', selectItem));
