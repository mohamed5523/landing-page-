const my_list=document.getElementById("navbar__list");
const my_section=document.querySelectorAll("section");
Array.from(my_section);
function list(){
    for(se of my_section){
        const item=document.createElement("li");
        item.innerHTML=`<li><a href="#${se.id}" data-nav"${se.id}" class="menu_link">${se.document.nav}</a><li>`;
        my_list.appendChild(item);
    }

}
list();
window.onscroll=function(){
    const mo=document.querySelectorAll("section")
    mo.forEach(function(act){
        if(
            act.getBoundingClientRect().top>=400 &&
            act.getBoundingClientRect().top<=150

        ){
            act.classList.add("act-class");
        }else{
            act.classList.remove("act-class");
        }
    });
    
};
my_list.addEventListener("click",(tose)=>{
    tose.preventDefault();
    if (tose.target.dataset.nav){
      document
        .getElementById(`${tose.target.dataset.nav}`)
        .scrollIntoView({behavior:"smooth"});
      setTimeout(()=>{
          location.hash=`${tose.target.dataset.nav}`;
      },170);
      
      
      

    }
});
