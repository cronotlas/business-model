$(function() {
  const isRtl = $("html").attr("dir") === "rtl"
  const positionProvider = (opt, x, y) => {
    const position = isRtl ? x - opt.$menu.outerWidth() : x
    
    opt.$menu.css({
      top: y,
      left: position
    })
  }
  const callbackProvider = (key, options) => {
    alert(`clicked: ${key}`)
  }

  $.contextMenu({
    selector: "#context-menu-1",
    position: positionProvider,
    callback: callbackProvider,
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      copy: {
        name: "Copy",
        icon: "copy"
      },
      paste: {
        name: "Paste",
        icon: "paste"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-2",
    position: positionProvider,
    callback: callbackProvider,
    items: {
      edit: {
        name: "Edit",
        icon: "fa-edit"
      },
      cut: {
        name: "Beer",
        icon: "fa-beer"
      },
      copy: {
        name: "Cloud download",
        icon: "fa-cloud"
      },
      paste: {
        name: "Certificate",
        icon: "fa-certificate"
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-3",
    position: positionProvider,
    callback: callbackProvider,
    items: {
      edit: {
        name: "Edit",
        icon: "edit",
        accesskey: "e"
      },
      cut: {
        name: "Cut",
        icon: "cut",
        accesskey: "c"
      },
      copy: {
        name: "Copy",
        icon: "copy",
        accesskey: "c o p y"
      },
      paste: {
        name: "Paste",
        icon: "paste",
        accesskey: "p t"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-4",
    position: positionProvider,
    callback: callbackProvider,
    items: {
      edit: {
        name: "Clickable",
        icon: "edit",
        disabled: false
      },
      cut: {
        name: "Disabled",
        icon: "cut",
        disabled: true
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-5",
    position: positionProvider,
    callback: callbackProvider,
    items: {
      edit: {
        name: "Closing on Click",
        icon: "edit",
        callback: () => {
          return true
        }
      },
      cut: {
        name: "Open after Click",
        icon: "cut",
        callback: () => {
          return false
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-6",
    position: positionProvider,
    callback: callbackProvider,
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: "quit"
      },
      sep2: "---------",
      fold1: {
        name: "Sub group",
        items: {
          fold1_key1: {
            name: "Foo bar"
          },
          fold2: {
            name: "Sub group 2",
            items: {
              fold2_key1: {
                name: "alpha"
              },
              fold2_key2: {
                name: "bravo"
              },
              fold2_key3: {
                name: "charlie"
              }
            }
          },
          fold1_key3: {
            name: "delta"
          }
        }
      },
      fold1a: {
        name: "Other group",
        items: {
          fold1a_key1: {
            name: "echo"
          },
          fold1a_key2: {
            name: "foxtrot"
          },
          fold1a_key3: {
            name: "golf"
          }
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-7",
    position: positionProvider,
    callback: callbackProvider,
    trigger: "left",
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      copy: {
        name: "Copy",
        icon: "copy"
      },
      paste: {
        name: "Paste",
        icon: "paste"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })

  $.contextMenu({
    selector: "#context-menu-8",
    position: positionProvider,
    callback: callbackProvider,
    trigger: "hover",
    delay: 200,
    autoHide: true,
    items: {
      edit: {
        name: "Edit",
        icon: "edit"
      },
      cut: {
        name: "Cut",
        icon: "cut"
      },
      copy: {
        name: "Copy",
        icon: "copy"
      },
      paste: {
        name: "Paste",
        icon: "paste"
      },
      delete: {
        name: "Delete",
        icon: "delete"
      },
      sep1: "---------",
      quit: {
        name: "Quit",
        icon: (element, key, item) => {
          return "context-menu-icon context-menu-icon-quit"
        }
      }
    }
  })
})
