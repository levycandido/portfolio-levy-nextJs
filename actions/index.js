import axios from 'axios';
import Cookies from 'js-cookie';
import {getCookieFromReq} from '../helpers/utils';



const setAuthHeaders = (req) => {
    const token = req ?  getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if (token) {
        return {headers: {'authorization': `Bearer ${token}`}};
    }

    return undefined;

}

export const getSecretData = async (req) => {
    const url = 'http://localhost:3000/api/v1secret';
    return await axios.get(url, setAuthHeaders() ).then(response => response.data);
}


export const getPortfolios = async (req) => {
    return await axios.get('http://localhost:3000/api/v1/portfolios').then(response => response.data);
  }
  
  
  export const getPortfolioById = async (id) => {
    return await axios.get(`http://localhost:3000/api/v1/portfolios/${id}`).then(response => response.data);
  }

const rejectPromise = (resError) => {
    let error = {};
    if (resError && resError.response && resError.response.data) {
        error = resError.response.data;
    } else {
        error = resError;
    }

    return Promise.reject(error);
}
  
  
  export const createPortfolio = async (portfolioData) => {
    return await axios.post('http://localhost:3000/api/v1/portfolios', portfolioData, setAuthHeaders())
      .then(response => response.data)
      .catch(error => {return rejectPromise(error)});
  }
  
  export const updatePortfolio = async (portfolioData) => {
    return await axios.patch(`http://localhost:3000/api/v1/portfolios/${portfolioData._id}`, portfolioData, setAuthHeaders())
      .then(response => response.data)
      .catch(error => rejectPromise(error))
  }
  
  export const deletePortfolio = (portfolioId) => {
    return axios.delete(`http://localhost:3000/api/v1/portfolios/${portfolioId}`, setAuthHeaders()).then(response => response.data);
  }
  