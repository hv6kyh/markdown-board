import { environment } from './../../../environments/environment';

export let API_URL = null;

switch (environment.URLCODE) {
  case 'LOCAL':
    API_URL = 'http://localhost:3000/dev/api';
    break;
  case 'PRODUCTION':
    API_URL = 'http://220.230.114.79:3000/api/v1';
    break;
  default:
    API_URL = 'http://localhost:3000/api';
    break;
}
