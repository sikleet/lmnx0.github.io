//basta mga ing ani
var resize = 1 //resize
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const trigger1 = document.querySelector('.trigger1');
const para = document.createElement('p');
const para2 = document.createElement('p');
para.setAttribute("class", "Abouttitle");
para2.setAttribute("class", "Abouttxt");
const aboutbtn = document.createElement('button');//creates button

//event listener sa modal
aboutbtn.addEventListener("click", showingAbout);
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//search bar
function search_music() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('music');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

//open
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}

//close
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

//full screen
function fullNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft= "100%";
}

//minimize
function minNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft= "350px";
}

//modal
function toggleModal() {
    aboutbtn.innerText = 'About';
    modalContent.append(aboutbtn);
    const createModal = document.createElement('div');
    modal.classList.toggle("show-modal");
    createModal.setAttribute('class','modal');
    para.remove();
    para2.remove();
}
 
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

//about modal
function showingAbout(){
    aboutbtn.remove();//remove about button
    para.innerText = "About us: ";
    para2.innerText = "MAGHILAK NAKO KAY AKO RA JUD ISA NAGHIMO DINHIA YAWA";
    document.querySelector(".modal-content").append(para);
    document.querySelector(".modal-content").append(para2);
}

//backup resize
/* function clickNav() {
    switch(resize) {
        case 0 :
            minNav()
            ++ resize
            break;
        case 1 :
            fullNav()
            -- resize
            break;
    }
} */

//resize
function clickNav() {
    if (resize == 0) {
        minNav();
        ++ resize;
    } else {
        fullNav();
        -- resize;
    }
}