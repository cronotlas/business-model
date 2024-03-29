$(function() {
  $("#slider-1").ionRangeSlider()

  $("#slider-2").ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550
  })

  $("#slider-3").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500
  })

  $("#slider-4").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500,
    step: 250
  })

  $("#slider-5").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
  })

  $("#slider-6").ionRangeSlider({
    type: "double",
    grid: true,
    min: -12.8,
    max: 12.8,
    from: -3.2,
    to: 3.2,
    step: 0.1
  })

  $("#slider-7").ionRangeSlider({
    type: "single",
    grid: true,
    min: -90,
    max: 90,
    from: 0,
    postfix: "°"
  })

  $("#slider-8").ionRangeSlider({
    type: "double",
    min: 100,
    max: 200,
    from: 145,
    to: 155,
    prefix: "Weight: ",
    postfix: " million pounds",
    decorate_both: true
  })
})
