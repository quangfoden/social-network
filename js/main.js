const root = document.querySelector(':root');
//SHOW HIDE RIGHT 

// popup 
const menuItems = document.querySelectorAll('.menu-item');
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

// click icon show hide sidebar 
const clickShowsidebar = document.querySelector('.icon-show-sidebar');
clickShowsidebar.onclick = () => {
    //console.log('click')
    let siDebar = document.querySelector('.sidebar');
    siDebar.style.display = 'block';
}
const clickHidesidebar = document.querySelector('.icon-close-sidebar')
clickHidesidebar.onclick = () => {
    // console.log('click')
    let siDebar = document.querySelector('.sidebar');
    siDebar.style.display = 'none';
}
//========CLICK WINDOW SHOW HIDE
let showMessages = document.querySelector('.messages');
let showNotifications = document.querySelector('.notification-popup');
let showRequests = document.querySelector('.friend-requests')
document.addEventListener("mousedown", function (event) {
    // Nếu người dùng không nhấp chuột vào phần tử
    if (!showMessages.contains(event.target)) {
        // Ẩn phần tử
        showMessages.style.display = "none";
    }

    if (!showNotifications.contains(event.target)) {
        // Ẩn phần tử
        showNotifications.style.display = "none";
    }

    if (!showRequests.contains(event.target)) {
        // Ẩn phần tử
        showRequests.style.display = "none";
    }
});
// let showMessages = document.querySelector('.messages');
// let showNotifications = document.querySelector('.notification-popup');
// let showRequests = document.querySelector('#new-myfriend')
// window.onclick = () => {
//     if (showNotifications.style.display === 'block') {
//         showNotifications.style.display = 'none'; //}
//         // showMessages.style.display = 'none'; //
//         // showRequests.style.display = 'none'; //
//     }
// }


menuItems.forEach(item => {
    let notification = document.querySelector('.notification-popup')
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id !== 'notifications') {
            notification.style.display = 'none';
        }
        else {
            notification.style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// ===== 



// =================MESSAGE==================

const messageNotifition = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
// searcher chat 
const searchMessages = () => {
    //const val = messageSearch.value.toLowerCase();
    // console.log(val);
    const val = messageSearch.value;
    message.forEach(user => {
        let name = user.querySelectorAll('h5')
        // name.textContent.toLowerCase();
        // if (name.indexOf(val) != -1) {
        //     user.style.display = 'flex';
        // } else {
        //     user.style.display = 'none';
        // }
        for (let i = 0; i < message.length; i++) {
            let nameText = message[i].textContent.toLowerCase();
            if (nameText.indexOf(val.toLowerCase()) != -1) {
                message[i].style.display = 'flex';
            } else {
                message[i].style.display = 'none';
            }
        }

    })
}
//search chat 
messageSearch.addEventListener('keyup', searchMessages);
// =====
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id !== 'messages-notifications') {
            messages.style.display = 'none';
        }
        else {
            messages.style.display = 'block';
        }
    })
})



// hightlight 
messageNotifition.addEventListener('click', () => {
    //console.log('xin chao');
    messageNotifition.querySelector('.notification-count').style.display = 'none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    setTimeout(() => { messages.style.boxShadow = 'none' }, 2000);
})

// ==========END MESSAGE==============

// =============request ==================

const requests = document.querySelector('#new-myfriend');
const request = document.querySelector('.friend-requests');
requests.addEventListener('click', () => {
    requests.querySelector('.notification-count').style.display = 'none';
    request.style.boxShadow = '0 0 1rem var(--color-primary)'
    setTimeout(() => { request.style.boxShadow = 'none' }, 3000);
});
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id !== 'new-myfriend') {
            request.style.display = 'none';
        }
        else {
            request.style.display = 'block';
        }
    })
})


//Theme color /customsize

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customsize-theme');


const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customsize-theme')) {
        themeModal.style.display = 'none';
    }
};
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// chose size

const fontSizes = document.querySelectorAll('.chose-size');

const removeSizeselector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

// ====================================================
fontSizes.forEach(size => {
    size.addEventListener('click', (e) => {
        //console.log('chosen size')
        let fontSize
        if (e.target.classList.contains('font-size-1')) {
            fontSize = "10px";
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        }
        else if (e.target.classList.contains('font-size-2')) {
            fontSize = "13px";
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        }
        else if (e.target.classList.contains('font-size-3')) {
            fontSize = "16px";
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        }
        else if (e.target.classList.contains('font-size-4')) {
            fontSize = "19px";
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        }
        else if (e.target.classList.contains('font-size-5')) {
            fontSize = "22px";
            root.style.setProperty('----sticky-top-left', '-10rem')
            root.style.setProperty('----sticky-top-right', '-33rem')
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

const fs1 = document.querySelector('.font-size-1');
const fs2 = document.querySelector('.font-size-2');
const fs3 = document.querySelector('.font-size-3');
const fs4 = document.querySelector('.font-size-4');
const fs5 = document.querySelector('.font-size-5');

fs1.addEventListener('click', () => {
    fs1.classList.add('active');
    fs2.classList.remove('active');
    fs3.classList.remove('active');
    fs4.classList.remove('active');
    fs5.classList.remove('active');
})
fs2.addEventListener('click', () => {
    fs2.classList.add('active');
    fs1.classList.remove('active');
    fs3.classList.remove('active');
    fs4.classList.remove('active');
    fs5.classList.remove('active');
})
fs3.addEventListener('click', () => {
    fs3.classList.add('active');
    fs2.classList.remove('active');
    fs1.classList.remove('active');
    fs4.classList.remove('active');
    fs5.classList.remove('active');
})
fs4.addEventListener('click', () => {
    fs4.classList.add('active');
    fs2.classList.remove('active');
    fs1.classList.remove('active');
    fs3.classList.remove('active');
    fs5.classList.remove('active');
})
fs5.addEventListener('click', () => {
    fs5.classList.add('active');
    fs2.classList.remove('active');
    fs3.classList.remove('active');
    fs4.classList.remove('active');
    fs1.classList.remove('active');
})


// ===================COLOR======================

const colorPalette = document.querySelectorAll('.chose-color')
colorPalette.forEach(color => {
    let primaryHue
    color.addEventListener('click', (e) => {
        // console.log('xin chaooo')
        if (e.target.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (e.target.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (e.target.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (e.target.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (e.target.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');
const color4 = document.querySelector('.color-4');
const color5 = document.querySelector('.color-5');

color1.addEventListener('click', () => {
    color1.classList.add('active');
    color2.classList.remove('active');
    color3.classList.remove('active');
    color4.classList.remove('active');
    color5.classList.remove('active');
})
color2.addEventListener('click', () => {
    color2.classList.add('active');
    color1.classList.remove('active');
    color3.classList.remove('active');
    color4.classList.remove('active');
    color5.classList.remove('active');
})
color3.addEventListener('click', () => {
    color3.classList.add('active');
    color2.classList.remove('active');
    color1.classList.remove('active');
    color4.classList.remove('active');
    color5.classList.remove('active');
})
color4.addEventListener('click', () => {
    color4.classList.add('active');
    color2.classList.remove('active');
    color1.classList.remove('active');
    color3.classList.remove('active');
    color5.classList.remove('active');
})
color5.addEventListener('click', () => {
    color5.classList.add('active');
    color2.classList.remove('active');
    color3.classList.remove('active');
    color4.classList.remove('active');
    color1.classList.remove('active');
})

// ===================background-color==============================

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

let darkcolorlightness
let lightcolorlightness
let whitecolorlightness

const changeBg = () => {
    root.style.setProperty('--dark-color-lightness', darkcolorlightness)
    root.style.setProperty('--light-color-lightness', lightcolorlightness)
    root.style.setProperty('--white-color-lightness', whitecolorlightness)
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    darkcolorlightness = '17%'
    lightcolorlightness = '95%'
    whitecolorlightness = '100%'
    changeBg();
})

bg2.addEventListener('click', () => {
    darkcolorlightness = '80%'
    lightcolorlightness = '15%'
    whitecolorlightness = '15%'

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
})
bg3.addEventListener('click', () => {
    darkcolorlightness = '95%'
    lightcolorlightness = '0%'
    whitecolorlightness = '10%'

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})
