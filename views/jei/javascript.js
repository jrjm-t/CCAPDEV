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