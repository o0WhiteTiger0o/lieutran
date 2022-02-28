function nextPage(url){
    const link = document.createElement('a');
    link.href = url;
    link.target = '_self';
    document.body.appendChild(link);
    link.click();
    link.remove();
    return window.open(url),_self;
}



function show(elementID) {
    let ele = document.getElementById(elementID);
    if (!ele) {
        alert("No Such Page Found.");
        return;
    }
    let pages = document.getElementsByClassName('page');
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}