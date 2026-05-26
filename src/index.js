import './style.css';
import HomePage from './pages/home.js'
import ContactPage from './pages/contact.js'
import ReservationsPage from './pages/reservations.js'
import MenuPage from './pages/menu.js'

const pages = {
    Home: HomePage,
    Contact: ContactPage,
    Reservations: ReservationsPage,
    Menu: MenuPage
}

const contentContainer = document.querySelector('#container');
contentContainer.appendChild(HomePage());

const navPanel = document.querySelector('nav');
navPanel.addEventListener('click', (e) =>{
    console.log(e.target.textContent);
    const pageName = e.target.textContent;
    if(pages[pageName]) {console.log('exicsts'); contentContainer.replaceChildren(pages[pageName]())};
})
