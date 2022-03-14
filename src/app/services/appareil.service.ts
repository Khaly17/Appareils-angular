export class AppareilService {

    appareils = [
        {
          name: 'Television',
          status: 'off'
        },
        {
          name: 'Machine a laver',
          status: 'on'
        },
        {
          name: 'Ordinateur',
          status: 'off'
        },
    ]

    switchOnAll() {
        for(let appareil of this.appareils){
            appareil.status = 'on';
        }
      }

    switchOffAll() {
        for(let appareil of this.appareils){
            appareil.status = 'off';
        }
    }

  
}