//axios permet de contrôler une requête post depuis le frontend
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + sessionStorage.getItem('token');

