const tabs = document.querySelectorAll('.tab-item');
const tabText = document.querySelectorAll('.tab-des-item');
const line = document.querySelector('.line');

for(var i = 0; i < tabs.length; i++) {
    const pane = tabText[i];
    const tab = tabs[i];
    tabs[i].addEventListener('click', function(e) {
        var curTabActive = document.querySelector('.tab-item.active');
        var curPaneActive = document.querySelector('.tab-des-item.active');
        curTabActive.classList.remove('active');
        curPaneActive.classList.remove('active');
        e.target.classList.add('active');
        pane.classList.add('active');
        line.style.left = this.offsetLeft + 20 + "px";
        line.style.width = this.offsetWidth + "px";
    })
    // console.log(tabText[i]);
}