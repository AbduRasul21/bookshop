let divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.append(divContainer);

let h1Title = document.createElement("h1");
h1Title.classList.add("title");
divContainer.append(h1Title);

{
  /* <i class="fa fa-camera-retro fa-5x"></i>; */
}
// Container for shppoing cart
let iconDiv = document.createElement("div");
iconDiv.classList.add("icon__wrapper");

divContainer.append(iconDiv);

let iconBag = document.createElement("i");
iconBag.classList.add("fa");
iconBag.classList.add("fa-shopping-cart");
iconBag.classList.add("fa-3x");

iconDiv.append(iconBag);

let iconCounter = document.createElement("div");
iconCounter.classList.add("icon__counter");

iconDiv.append(iconCounter);

// Title

h1Title.innerHTML = "Book Catalog";

let containerBooks = document.createElement("section");
containerBooks.classList.add("container__books");

divContainer.append(containerBooks);
var itemsInBag = [];

fetch("./books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((value) => {
      let containerBook = document.createElement("div");
      containerBook.classList.add("container__book");
      containerBooks.append(containerBook);

      let bookImage = document.createElement("div");
      bookImage.classList.add("book__image");
      containerBook.append(bookImage);

      let image = document.createElement("img");
      image.classList.add("image");
      bookImage.append(image);
      image.src = value.imageLink;
      image.alt = value.title;

      let bookDescription = document.createElement("div");
      bookDescription.classList.add("book__description");
      containerBook.append(bookDescription);

      let bookAuthor = document.createElement("h3");
      bookAuthor.classList.add("book__author");
      bookAuthor.innerHTML = value.author;

      let bookTitle = document.createElement("h2");
      bookTitle.classList.add("book__title");
      bookTitle.innerHTML = value.title;

      let bookPrice = document.createElement("p");
      bookPrice.classList.add("book__price");
      bookPrice.innerHTML = `Price: ${value.price}$`;

      let bookFooter = document.createElement("div");
      bookFooter.classList.add("book__footer");

      bookDescription.append(bookAuthor, bookTitle, bookPrice, bookFooter);

      let showMore = document.createElement("a");
      showMore.classList.add("show__more");
      bookFooter.append(showMore);
      showMore.href = "#";
      showMore.innerHTML = "Show more";

      // start show more popup modal
      let overLay = document.createElement("div");
      overLay.classList.add("overlay");
      overLay.setAttribute("id", "overlay");
      document.body.append(overLay);

      let popUp = document.createElement("div");
      popUp.classList.add("popup");
      overLay.append(popUp);

      let closeIcon = document.createElement("div");
      closeIcon.classList.add("close-icon");
      closeIcon.innerHTML = "&#10006";

      let popTitle = document.createElement("h3");
      popTitle.classList.add("pop-title");
      popTitle.textContent = value.title;

      let popContent = document.createElement("p3");
      popContent.classList.add("pop-content");
      popContent.textContent = value.description;

      popUp.append(closeIcon, popTitle, popContent);

      showMore.addEventListener("click", () => {
        overLay.style.display = "block";
      });

      closeIcon.addEventListener("click", () => {
        overLay.style.display = "none";
      });

      // end show more popup modal

      let addToBag = document.createElement("button");
      addToBag.classList.add("add-to-bag");
      bookFooter.append(addToBag);
      addToBag.innerHTML = "Add to bag";

      // start add to bag

      addToBag.addEventListener("click", () => {
        itemsInBag.push(value);

        itemsInBag.forEach((element) => {
          console.log(element.title);
          iconCounter.innerHTML = `${itemsInBag.length}`;
        });
      });
    });
    // iconDiv.addEventListener("click", () => {
    //   console.log(itemsInBag);
    // });
  });

// start items in bag

let itemsWrapper = document.createElement("div");
itemsWrapper.classList.add("items__wrapper");
itemsWrapper.classList.add("none__visible");

divContainer.append(itemsWrapper);

iconDiv.addEventListener("click", () => {
  itemsWrapper.classList.toggle("none__visible");
  itemsInBag.forEach((value) => {
    let authorsInBag = document.createElement("p");
    itemsWrapper.append(authorsInBag);
    authorsInBag.innerHTML = `${value.author}`;

    console.log(value.author);
  });
});
