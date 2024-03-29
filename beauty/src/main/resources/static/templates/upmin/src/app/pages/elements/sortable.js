$(function() {
  new Sortable(document.getElementById("sortable-1"))

  new Sortable(document.getElementById("sortable-2"), {
    handle: ".sortable-handle"
  })

  new Sortable(document.getElementById("sortable-3-start"), {
    group: "shared"
  })

  new Sortable(document.getElementById("sortable-3-end"), {
    group: "shared"
  })

  new Sortable(document.getElementById("sortable-4-start"), {
    group: {
      name: "shared",
      pull: "clone"
    }
  })

  new Sortable(document.getElementById("sortable-4-end"), {
    group: {
      name: "shared",
      pull: "clone"
    }
  })

  new Sortable(document.getElementById("sortable-5-start"), {
    group: {
      name: "shared",
      pull: "clone",
      put: false
    },
    sort: false
  })

  new Sortable(document.getElementById("sortable-5-end"), {
    group: "shared"
  })

  new Sortable(document.getElementById("sortable-6"), {
    group: "shared",
    invertSwap: true
  })

  $("#sortable-6")
    .find(".sortable")
    .each(function() {
      new Sortable(this, {
        group: "shared",
        invertSwap: true
      })
    })
})
