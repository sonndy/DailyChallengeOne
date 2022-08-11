console.time("loadingPage");

let cardObjectArray = [
    {
        headerImage: './media/One/cardOne.png',
        imgAlt: 'a vast desert',
        bottomImages: [
            './media/One/cardOne-one.png',
            './media/One/cardOne-two.png',
            './media/One/cardOne-three.png'
            ],
        cardType: 'People',
        numberOfPics: '144'
    },
    {
        headerImage: './media/Two/cardTwo.png',
        imgAlt: 'a vast desert',
        bottomImages: [
            './media/Two/cardTwo-one.png',
            './media/Two/cardTwo-two.png',
            './media/Two/cardTwo-three.png'
            ],
        cardType: 'Nature',
        numberOfPics: '7K'


    }
]



const cardContainers = document.querySelector(".cards-container");


const newCard = (cardObjectArray) => {
    
    if(Array.isArray(cardObjectArray) === false || typeof(cardObjectArray[0]) !== 'object'){
        console.log("an array of objects must be pass in as an argument");
        return;
    }

    cardObjectArray.forEach((myCard) => {
            // creating card elements

        let cardSection = document.createElement("section");
        cardSection.classList.add("card");

        // head-image container

        let headImageContainer = document.createElement("div");
        headImageContainer.classList.add("header-image");

        // main image

        let mainImage = document.createElement("img");
        mainImage.src = myCard.headerImage;
        mainImage.alt = myCard.imgAlt

        headImageContainer.appendChild(mainImage);

        // bottom images section

        let bottomImageContainer = document.createElement("bottom-images");
        bottomImageContainer.classList.add("bottom-images");

        
        myCard.bottomImages.forEach((imageSrc) => {
            let smallImage = document.createElement("img");
            smallImage.src = imageSrc;
            bottomImageContainer.appendChild(smallImage);
        })


        // footer section

        let footer = document.createElement("footer");

        let sectionName = document.createElement("p");
        sectionName.textContent = myCard.cardType;
        
        let captureLike = document.createElement("div");

        captureLike.classList.add("capture-icon");

        let footerImage = document.createElement("img");
        footerImage.src = './media/Frame.png';

        captureLike.append(footerImage);


        footer.append(sectionName, captureLike, myCard.numberOfPics);

        // appending everything to the card

        cardSection.append(headImageContainer, bottomImageContainer, footer);

        // appending card to the card container

        cardContainers.append(cardSection);
        console.log(cardSection)
    })

   



    
}



newCard(cardObjectArray);

console.timeEnd("loadingPage");
