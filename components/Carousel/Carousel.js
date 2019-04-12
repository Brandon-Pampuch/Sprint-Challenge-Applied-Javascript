



class Carousel {
    constructor(carousel){
        this.carousel = carousel
        
        this.pictures = document.querySelectorAll("img.slide")
        
        this.leftButton = carousel.querySelector(".left-button")
       
        this.rightButton = carousel.querySelector(".right-button")
      

        //create an array to flip through
        
        this.rightButton.addEventListener("click", ()=> this.rotateRight())
        this.leftButton.addEventListener("click", ()=> this.rotateLeft())
    }
    
    rotateRight(){
        console.log("right")
        //move up in the array of photos using animation or z-index to display current photo

    }
    rotateLeft(){
        console.log("left")
        //move down in the array of photos using animation or z-index to display current photo
    }
}






let carousel = document.querySelectorAll(".carousel");

carousel.forEach((carousel)=>{
    return new Carousel(carousel)
})


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoenent. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/







