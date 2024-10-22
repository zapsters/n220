function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);
  $(`#screens div`).each(function () {
    $(this).css("display", "none");
  });

  if (pageID == "") pageID = "index";

  if ($(`#${pageID}`).length != 0) {
    console.log($(`#${pageID}`));
    $(`#${pageID}`).css("display", "block");
  } else {
    console.log($(`#${pageID}`));
    $(`#error`).css("display", "block");
    $(`#error`).text("Couldn't find path.");
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
});
