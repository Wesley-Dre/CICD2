import axios, { AxiosPromise } from "axios"
import { CarroData } from "../interface/CarroData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://54.161.48.63:8080'

const fetchData = async(): AxiosPromise<CarroData[]> => {
    const response = axios.get(API_URL + '/carro');
    return response;
}
export function useCarroData(){
const query = useQuery({
    queryFn: fetchData,
    queryKey: ['carro-data'],
    retry:2
})
 
return {
    ...query,
    data: query.data?.data
}
}