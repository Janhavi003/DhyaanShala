const form = document.getElementById("form-container")

function showcontact(){
    form.style.display = "block"
}

function closecontact(){
    form.style.display = "none"
}

function showalert(){
    alert("Contact Details Collected Successfully")
}

array1 = [
    "https://media.istockphoto.com/id/860080282/photo/athletic-people-practicing-yoga-on-a-sports-class-in-nature.jpg?s=612x612&w=0&k=20&c=Fel7DQ_B4dcELQqSSXQ0uxqNLmQoOpIg7naaIiHGyPs=",
    "https://images.squarespace-cdn.com/content/v1/58a3c72be3df28d9fb005457/1502494327526-HRY3H97RPUZUSFXGEQ45/T51A5904.jpg?format=2500w",
    "https://www.shutterstock.com/image-photo/diversity-people-exercise-class-relax-260nw-526318150.jpg",
    "https://img.freepik.com/free-photo/group-young-sporty-people-easy-seat-close-up_1163-5017.jpg",
    "./pics/grp1.jpg"
]

const photogalleryimg = document.getElementById("img1")

function changeimg(){
    let index1 = array1.indexOf(photogalleryimg.getAttribute("src")) + 1

    if (index1 == 5){
        index1 = 0;
    }
    
    photogalleryimg.setAttribute("src" , array1[index1]) 
}

function changeimg2(){
    let index1 = array1.indexOf(photogalleryimg.getAttribute("src")) - 1;

    if(index1 == -1){
        index1 = 4;
    }

    photogalleryimg.setAttribute("src" , array1[index1])
}