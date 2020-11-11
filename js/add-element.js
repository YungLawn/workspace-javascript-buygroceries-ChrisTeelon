/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$("li.hot").removeClass("hot");
$("li").addClass("cool");

// traverse the elements
$("#one")
  .next()
  .next()
  .text("milk");

// add a new element

// add by clicking the plus sign
$("#add").click(addElement);

function addElement() {
  // add a input text box
  $("#todo").append(
    "<li class='cool'> <input type='text' placeholder='New Item'> </input> </li>"
  );

  //whenever user is document
  $("input").blur(function() {
    $(this)
      .parent()
      .addClass("cool");

    //bind click with new li element
    $(this)
      .parent()
      .click(changeStyle);

    //remove input element and replace with typed value
    var userinput = $(this).val();
    $(this)
      .parent()
      .text(userinput);
  });
}

$("li").click(changeStyle); //bind click with event

//  click the li element will change the changeStyle
function changeStyle() {
  if ($(this).hasClass("complete")) {
    $(this).removeClass("complete");
    $(this).addClass("cool");
  } else {
    //if it is cool class, remove cool and add complete
    //if it is hot class, remove hot and add complete
    //else, add complete
    if ($(this).hasClass("cool")) {
      $(this).removeClass("cool");
      $(this).addClass("complete");
    }
    if ($(this).hasClass("hot")) {
      $(this).removeClass("hot");
      $(this).addClass("complete");
    } else {
      $(this).addClass("complete");
    }
  }
}

// delete by clicking the trash can
$("#remove").click(removeElement);

function removeElement() {
  // remove the marked element
  $("li.complete").remove();
}

// $("#save").click(saveElements);

// function saveElements() {
//   console.log("i did it");

//   firebase.firestore().collection("mylist").add({
//       item: "do it"
//     });
// }
