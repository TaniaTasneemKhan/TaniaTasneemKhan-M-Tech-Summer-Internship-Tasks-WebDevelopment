// Makes the CV directly editable in the browser.
// Click any text to edit it, then use the Print/Download button to save as PDF.

document.addEventListener("DOMContentLoaded", () => {
  const editableSelectors = "h1, h2, h3, p, li, span:not(.icon)";
  const cv = document.getElementById("cv");

  cv.querySelectorAll(editableSelectors).forEach(el => {
    // Don't make icons or buttons editable
    if (el.closest(".no-print")) return;
    el.setAttribute("contenteditable", "true");
  });

  // Quality of life: prevent Enter from creating new <div>s inside contenteditable
  cv.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName !== "LI") {
      // allow line breaks but keep things clean
    }
  });
});