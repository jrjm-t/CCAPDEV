function liked(idName){
    let displayImage = document.getElementById(idName)
    if (displayImage.src.match('media/upvote.png')){
        displayImage.src='../media/orange_upvote.png'
    }else{
        displayImage.src='../media/upvote.png'
    }
}

function disliked(idName){
    let displayImage = document.getElementById(idName)
    if (displayImage.src.match('media/downvote.png')){
        displayImage.src='../media/orange_downvote.png'
    }else{
        displayImage.src='../media/downvote.png'
    }
}


function addPopUp(openButtonId, closeButtonId, popUpId){
    const openBtn=document.getElementById(openButtonId);
    const closeBtn=document.getElementById(closeButtonId);
    const modal=document.getElementById(popUpId);

    //this adds and removes the "open" class from the model
    //the open class makes the z-index (like, the layer indicator) into 999 (making it appear on top of everything)
    openBtn.addEventListener("click", ()=>{
        modal.classList.add("open");
    });
    closeBtn.addEventListener("click", ()=>{
        modal.classList.remove("open");
});
}