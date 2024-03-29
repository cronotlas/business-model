$(function() {
  // Initialize QuillJS
  new Quill("#quill", {
    theme: "snow",
    modules: {
      toolbar: [
        [{ font: ["poppins", "roboto mono"] }, { size: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "super" }, { script: "sub" }],
        [{ header: "1" }, { header: "2" }, "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }, { align: [] }],
        ["link", "image", "video", "formula"],
        ["clean"]
      ]
    }
  })
})
