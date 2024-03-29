$(function() {
  $("#jstree-1").jstree({
    plugins: ["types"],
    core: {
      themes: { ellipsis: true } // Collapse text responsively
    },
    types: {
      default: { icon: "far fa-folder" },
      file: { icon: "far fa-file" }
    }
  })

  $("#jstree-2").jstree({
    plugins: ["types"],
    core: {
      themes: { ellipsis: true }, // Collapse text responsively
      data: [
        {
          text: "Root node 1",
          children: [
            {
              text: "initially selected",
              state: { selected: true }
            },
            {
              text: "Custom icon",
              icon: "fa fa-briefcase"
            },
            {
              text: "Initially open",
              state: { opened: true },
              children: [
                {
                  text: "Disabled node",
                  state: { disabled: true }
                },
                {
                  text: "Another node",
                  type: "file"
                }
              ]
            },
            {
              text: "Sub nodes",
              children: [
                {
                  text: "Item 1",
                  type: "file"
                },
                {
                  text: "Item 2",
                  type: "file"
                },
                {
                  text: "Sub nodes",
                  children: [
                    {
                      text: "Item 1",
                      type: "file"
                    },
                    {
                      text: "Item 2",
                      type: "file"
                    }
                  ]
                },
                {
                  text: "Item 3",
                  type: "file"
                }
              ]
            },
            {
              text: "Custom color icon",
              icon: "fa fa-star text-success"
            }
          ]
        },
        {
          text: "Clickable link node",
          icon: "fa fa-link text-info",
          a_attr: { href: "//google.com" }
        }
      ] // Treeview data
    },
    types: {
      default: { icon: "far fa-folder" },
      file: { icon: "far fa-file" }
    }
  })

  $("#jstree-3").jstree({
    plugins: ["wholerow", "checkbox", "types"],
    core: {
      themes: { ellipsis: true } // Collapse text responsively
    },
    types: {
      default: { icon: "far fa-folder" },
      file: { icon: "far fa-file" }
    }
  })

  $("#jstree-4").jstree({
    plugins: ["dnd", "state", "types"],
    core: {
      themes: { ellipsis: true }, // Collapse text responsively
      check_callback: true
    },
    types: {
      default: { icon: "far fa-folder" },
      file: { icon: "far fa-file" }
    },
    state: { key: "demo2" }
  })

  $("#jstree-5").jstree({
    plugins: ["contextmenu", "types"],
    core: {
      themes: { ellipsis: true }, // Collapse text responsively
      check_callback: true
    },
    // Context menu object
    contextmenu: {
      items: node => {
        return {
          create: {
            separator_before: false,
            separator_after: true,
            label: "Create",
            icon: "fa fa-pen",
            action: false,
            submenu: {
              file: {
                seperator_before: false,
                seperator_after: false,
                icon: "fa fa-file",
                label: "File",
                action: data => {
                  let tree = $.jstree.reference(data.reference)
                  let node = tree.get_node(data.reference)

                  tree.create_node(
                    node,
                    {
                      text: "New File",
                      type: "file",
                      icon: "fa fa-file"
                    },
                    "last",
                    newNode => {
                      setTimeout(() => {
                        tree.edit(newNode)
                      }, 0)
                    }
                  )
                }
              },
              folder: {
                seperator_before: false,
                seperator_after: false,
                icon: "fa fa-folder",
                label: "Folder",
                action: data => {
                  let tree = $.jstree.reference(data.reference)
                  let node = tree.get_node(data.reference)

                  tree.create_node(
                    node,
                    {
                      text: "New Folder",
                      type: "default"
                    },
                    "last",
                    newNode => {
                      setTimeout(() => {
                        tree.edit(newNode)
                      }, 0)
                    }
                  )
                }
              }
            }
          },
          rename: {
            separator_before: false,
            separator_after: false,
            label: "Rename",
            icon: "fa fa-i-cursor",
            action: data => {
              let tree = $.jstree.reference(data.reference)
              let node = tree.get_node(data.reference)
              tree.edit(node)
            }
          },
          remove: {
            separator_before: false,
            separator_after: false,
            label: "Remove",
            icon: "fa fa-trash-alt",
            action: data => {
              let tree = $.jstree.reference(data.reference)
              let node = tree.get_node(data.reference)
              tree.delete_node(node)
            }
          },
          cpp: {
            separator_before: false,
            separator_after: false,
            label: "Edit",
            icon: "fa fa-ellipsis-v",
            action: false,
            submenu: {
              cut: {
                seperator_before: false,
                seperator_after: false,
                label: "Cut",
                icon: "fa fa-cut",
                action: data => {
                  let tree = $.jstree.reference(data.reference)
                  let node = tree.get_node(data.reference)

                  if (tree.is_selected(node)) {
                    tree.cut(tree.get_top_selected())
                  } else {
                    tree.cut(node)
                  }
                }
              },
              copy: {
                seperator_before: false,
                seperator_after: false,
                label: "Copy",
                icon: "fa fa-copy",
                action: data => {
                  let tree = $.jstree.reference(data.reference)
                  let node = tree.get_node(data.reference)

                  if (tree.is_selected(node)) {
                    tree.copy(tree.get_top_selected())
                  } else {
                    tree.copy(node)
                  }
                }
              },
              paste: {
                seperator_before: false,
                seperator_after: false,
                label: "Paste",
                icon: "fa fa-paste",
                action: data => {
                  let tree = $.jstree.reference(data.reference)
                  let node = tree.get_node(data.reference)
                  tree.paste(node)
                }
              }
            }
          }
        }
      }
    },
    types: {
      default: { icon: "far fa-folder" },
      file: { icon: "far fa-file" }
    }
  })

  const treeview = $("#jstree-6").jstree({
    plugins: ["search", "types"],
    core: {
      themes: { ellipsis: true }, // Collapse text responsively
      check_callback: true
    },
    types: {
      default: { icon: "far fa-folder" },
      file: { icon: "far fa-file" }
    }
  })

  // Input form handler for treeview searching
  $("#jstree-6-input").keyup(function() {
    const value = $(this).val()
    treeview.jstree(true).search(value)
  })
})
