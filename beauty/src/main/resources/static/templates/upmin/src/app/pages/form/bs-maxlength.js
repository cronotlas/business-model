$(function() {
  $("#maxlength-1").maxlength({
    placement: "bottom",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
    alwaysShow: false,
  })

  $("#maxlength-2").maxlength({
    placement: "bottom",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
    alwaysShow: false,
    threshold: 5,
  })

  $("#maxlength-3").maxlength({
    placement: "bottom",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
    alwaysShow: true,
  })

  $("#maxlength-4").maxlength({
    placement: "bottom",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
    separator: " of ",
    preText: "You have ",
    postText: " chars remaining.",
    alwaysShow: true,
    validate: true
  })

  $("#maxlength-5").maxlength({
    placement: "top-right",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
  })

  $("#maxlength-6").maxlength({
    placement: "bottom-right",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
  })

  $("#maxlength-7").maxlength({
    placement: "top-left",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
  })

  $("#maxlength-8").maxlength({
    placement: "bottom-left",
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-danger",
  })
})
