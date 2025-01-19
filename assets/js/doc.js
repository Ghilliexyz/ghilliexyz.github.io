document.querySelectorAll(".inner-doc [id]").forEach(function (el) {
    let anchorLink = document.createElement("a");
    anchorLink.href = "#" + el.id;
    anchorLink.classList.add("doc-link");
    el.innerHTML = anchorLink.outerHTML + el.innerHTML;
    el.dataset.hasDocLink = true;
});