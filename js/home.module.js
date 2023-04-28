import { Detalis } from "./detalis.module.js";
import { Ui } from "./ui.module.js";

export class Home {


  constructor(){
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', async()=> {
        document.querySelector('.navbar-nav .active').classList.remove('active');
        link.classList.add('active');
        // const category = link.getAttribute('data-category');
        const category = link.dataset.category;
        
        const allCategory = await this.getGames(category);  

        this.getGames(category);
      });
    }); 

    this.detalis = document.getElementById('details');
    this.loading = document.querySelector('.loading');
    this.games = document.getElementsByName('games'); 
    
    this.ui = new  Ui();
    this.detatailsSection =new Detalis()
    this.getGames('MMORPG');
  };
  

  async getGames(cat) { 

    this.loading.classList.remove('d-none');
    document.body.style.overflowY = 'hidden'

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '959d976a00msha3cd72ef3f678eap1ee65cjsnf7c22e9a6f11',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
    const respons = await api.json();
    this.loading.classList.add('d-none')
    document.body.style.overflowY = 'scroll'
    this.ui.displayGames(respons); 


    document.querySelectorAll('.card').forEach((card)=>{
      card.addEventListener('click', ()=> {
        this.detalis.classList.remove('d-none');
        this.games.forEach(game => {
          game.classList.add('d-none')
          new Detalis(card.dataset.id);
        });
        
      })
    })
  };

};
