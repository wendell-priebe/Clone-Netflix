//modal
function info_on() {
    document.querySelector(".modal_overlay").classList.add("active")
}
function info_off(){
    document.querySelector(".modal_overlay").classList.remove("active")
}

//lista de filmes
function selectedImage(){
    document.querySelector(".box_filmes").classList.add("transform")
    console.log("entrei")
}
function removeImage(){
    document.querySelector(".box_filmes").classList.remove("transform")
    console.log("sai")

}