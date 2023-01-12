let galleryImages = document.querySelectorAll(".gallery-image");

let getLatestOpenedImg;

let windowWidth = window.innerWidth;

if(galleryImages){ 

  galleryImages.forEach(
    function(image,index){

        image.onclick = function()
        {
          let getElcss = window.getComputedStyle(image);
          let getfullimgurl = getElcss.getPropertyValue("background-image");
          let getimgurlposition = getfullimgurl.split("/images/thumbs/")
          let setnewimgurl = getimgurlposition[1].replace('")','');
          
          getLatestOpenedImg = index + 1;

          let container = document.body;
          let newimgwindow = document.createElement("div");
          container.appendChild(newimgwindow);
          newimgwindow.setAttribute("class","img-window");
          newimgwindow.setAttribute("onclick","closeimg()");

          let newImg = document.createElement("img");
          newimgwindow.appendChild(newImg);
          newImg.setAttribute("src","images/"+ setnewimgurl);
          newImg.setAttribute("id","current-img");

          newImg.onload = function(){
             
            let imgwidth = this.width;
            let calcImgtoEdge =  ((windowWidth-imgwidth)/2)-80;

            let newnextbtn =  document.createElement("a");
            let btnnexttext =  document.createTextNode("Next");
            newnextbtn.appendChild(btnnexttext);
            container.appendChild(newnextbtn);
            newnextbtn.setAttribute("class","img-btn-next");
            newnextbtn.setAttribute("onclick","changeImg(1)");
            newnextbtn.style.cssText="right: "+ calcImgtoEdge +"px;";
  
            let newprevbtn =  document.createElement("a");
            let btnprevtext =  document.createTextNode("Prev");
            newprevbtn.appendChild(btnprevtext);
            container.appendChild(newprevbtn);
            newprevbtn.setAttribute("class","img-btn-prev");
            newprevbtn.setAttribute("onclick","changeImg(0)");
            newprevbtn.style.cssText="left: "+calcImgtoEdge+"px;";
          }
  

        }

  });
}
function closeimg(){
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changedir){
  document.querySelector("#current-img").remove();

  let getimgwindow = document.querySelector(".img-window");
  let newimg= document.createElement("img");
  getimgwindow.appendChild(newimg);

  let calcnewimg;
  if(changedir===1){
     calcnewimg = getLatestOpenedImg + 1;
     if(calcnewimg>galleryImages.length){
      calcnewimg = 1;
    }
  }
  else if(changedir===0){
    calcnewimg = getLatestOpenedImg - 1;
    if(calcnewimg<1){
     calcnewimg = galleryImages.length;
  }
 }
 newimg.setAttribute("src","images/img"+calcnewimg+".jpg");
 newimg.setAttribute("id","current-img");

 getLatestOpenedImg = calcnewimg;

  newimg.onload = function(){
  let imgwidth = this.width;
  let calcImgtoEdge =  ((windowWidth-imgwidth)/2)-80;

  let nextbtn = document.querySelector(".img-btn-next");
  nextbtn.style.cssText = "right: "+calcImgtoEdge+"px;";

  let prevbtn = document.querySelector(".img-btn-prev");
  prevbtn.style.cssText = "left: "+calcImgtoEdge+"px;";
 }
}
