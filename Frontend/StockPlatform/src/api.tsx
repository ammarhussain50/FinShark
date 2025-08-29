import axios from 'axios'
import type { CompanyBalanceSheet, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from './company'

interface SearchResponse {
      data : CompanySearch[];
}
export const SearchCompanies = async(query : string) => {
      try{
            const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/stable/search-name?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_APP_API_KEY}`);
            return data;
      }catch(error){
            if(axios.isAxiosError(error)){
                  console.log("error message",error.message);
                  return error.message;
                  
            }
            else {
                  console.log("unexpected error: ", error);
                  return "An expected error has occured.";
            }
      }
      
}





export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${import.meta.env.VITE_APP_API_KEY}`
    );
    return data;
  } catch (error:any) {
    console.log("error message: ", error.message);
  }
};


export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
       `https://financialmodelingprep.com/stable/key-metrics?symbol=${query}&apikey=${import.meta.env.VITE_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};



export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${import.meta.env.VITE_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${import.meta.env.VITE_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${import.meta.env.VITE_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};