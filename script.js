/*Name this external file gallery.js*/

function upDate(previewPic) {
  console.log("upDate event triggered!");
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);
  /* In this function you should 
    1) change the url for the background image of the div with the id = "image" */

  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  console.log(
    "Changed the background image of 'image' div to:",
    previewPic.src
  );
  /* to the source file of the preview image

    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  imageDiv.innerHTML = previewPic.alt;
  console.log("Changed the text of 'image' div to:", previewPic.alt);
}

function unDo() {
  let imageDiv = document.getElementById("image");

  /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was */
  imageDiv.style.backgroundImage = "url('')";
  /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
