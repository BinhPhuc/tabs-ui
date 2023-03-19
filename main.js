const tabs = document.querySelectorAll('.tab-item');
const tabText = document.querySelectorAll('.tab-des-item');
const line = document.querySelector('.line');
const iconList = document.querySelectorAll('.tab-icon')

const curTabActive = document.querySelector('.tab-item.active');

line.style.left = curTabActive.offsetLeft + 20 + "px";
line.style.width = curTabActive.offsetWidth + "px";

for(var i = 0; i < tabs.length; i++) {
    const pane = tabText[i];
    const tab = tabs[i];
    const icon = iconList[i];
    tab.addEventListener('click', function(e) {
        var curTabActive = document.querySelector('.tab-item.active');
        var curIconActive = document.querySelector('.tab-icon.active');
        var curPaneActive = document.querySelector('.tab-des-item.active');
        if(curTabActive.classList.contains('active')) {
            curTabActive.classList.remove('active');
        }
        else {
            curIconActive.classList.remove('active');
        }
        curPaneActive.classList.remove('active');
        tab.classList.add('active');
        icon.classList.add('active');
        pane.classList.add('active');
        line.style.left = this.offsetLeft + 20 + "px";
        line.style.width = this.offsetWidth + "px";
    })
    // console.log(tabText[i]);
}