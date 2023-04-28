import { Ui } from "./ui.module.js";
export class Detalis {
  constructor(id){ 

    this.btnClose = document.getElementById('btnClose');
    this.btnClose.addEventListener('click', function(){

      document.getElementById('details').classList.add('d-none');
        document.getElementsByName('games').forEach(game => {
          game.classList.remove('d-none')
        });
    });


    this.loading = document.querySelector('.loading');
    this.getDetalis(id ); 
  };
  
  async getDetalis(id) {
    this.loading.classList.remove('d-none');
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '959d976a00msha3cd72ef3f678eap1ee65cjsnf7c22e9a6f11',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const respons = await api.json();
    this.loading.classList.add('d-none');
    console.log(respons);
    new Ui().displayDetails(respons); 


    document.querySelectorAll('.card').forEach((card)=>{
      card.addEventListener('click', ()=> {
        this.detalis.classList.remove('d-none');
        this.games.forEach(game => {
          game.classList.add('d-none')
        });

      })
    })
  };

};
