const root = document.querySelector(':root');


const menuItems = document.querySelectorAll('.menu-item');


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

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


// =================MESSAGE==================

const messageNotifition = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
// searcher chat 
const searchMessages = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(user => {
        let name = user.querySelectorAll('h5')
        name.textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}
//search chat 
messageSearch.addEventListener('keyup', searchMessages);

// hightlight 
messageNotifition.addEventListener('click', () => {
    //console.log('xin chao');
    messageNotifition.querySelector('.notification-count').style.display = 'none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => { messages.style.boxShadow = 'none' }, 2000)
})

// ==========END MESSAGE==============


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
// const removeSizeselector = () => {
//     fontSizes.forEach(size => { size.classList.remove('active') })
// }

const removeSizeselector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


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


// ===================COLOR======================

const colorPalette = document.querySelectorAll('chose-color')
colorPalette.forEach(color => {
    colorPalette.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (e.target.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('----primary-color-hue', primaryHue)
    })

})


