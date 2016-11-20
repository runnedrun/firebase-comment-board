var commentInput = $("#comment-input")
var commentDisplay = $(".not-actually-the-right-class")

$("#comment-input").keydown(function(e) {
  if (e.which == 13) {
    addListItem("comments", commentInput.val());
  }
})

onNewListItem("comments", function(newComment) {
  commentDisplay.append("<div class=''>" + newComment + "</div>")
})