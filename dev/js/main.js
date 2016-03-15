(function () {

    var accordionWrapperNode = document.getElementsByClassName('accordionWrap')[0];
    var accordionHeadline = accordionWrapperNode.getElementsByClassName('accordionSection');

    function accordionToggle(e) {
        e.preventDefault();
        var accordionContent = this;
        if (accordionContent.classList.contains('active')) {
            accordionContent.classList.remove('active');
        } else {
            accordionContent.classList.add('active');
        }
    }

    for (var i = 0; i < accordionHeadline.length; i++) {
        accordionHeadline[i].addEventListener("click", accordionToggle);
    }
}());
