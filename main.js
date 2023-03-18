var tabs = document.querySelectorAll('.tab-item');

// console.log(tabs[0]);

for(var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(e) {
        // var tab_after = window.getComputedStyle(tabs[i], "::after");
        // console.log(tab_after);
        console.log(tabs[i]);
        // e.stopPropagation();
    });
    // console.log(tabs[i]);
}