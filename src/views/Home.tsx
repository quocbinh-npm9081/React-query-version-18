import {useState, useEffect} from 'react';
import { useQueryClient, useQuery, useQueries } from '@tanstack/react-query';
import Card from '../components/Card';
import { getCharacter } from '../api/apiCharacter';
import { getEpisode } from '../api/apiEpisode';

const Home = () => {
 const [error, setError] = useState<any>();
 const queryClient = useQueryClient();

 const optionQueries =  {
  staleTime: 6000, // thoi gian data duoc tinh la` new // default la 0  // sau 6s react-query se xem data la` moi
  cacheTime:10000, // thoi gian data ton tai trong cache, het thoi gian thi data = undefine
  retry: 1, // khi api ko goi dc, thi` no sex co gang gi them 1 lan nua
  retryDelay: 1000,// thoi gian goi lai
  refetchOnWindowFocus: false
}

 const fetchAllCharacter = async () => {   
  console.log("call api getCharacter")
  const response = await getCharacter();
  return response.data.results;
 } 
 const fetchAllEpisode = async () => {   
  console.log("call api getEpisode")
  const response = await getEpisode();
  return response.data.results;
 } 

 //call nhieu api cung 1 luc
  // const results = useQueries({queries: [
  //   {queryKey : ['characters', 1],queryFn:  fetchAllCharacter , ...optionQueries},
  //   {queryKey : ['episodies', 1], queryFn: fetchAllEpisode , ...optionQueries},
  // ]});
 


 //SU DDUNG useQuery khi call 1 api
  const {isError, isSuccess, isLoading,isFetched, data } = useQuery(['characters', 1],fetchAllCharacter, optionQueries);

  console.log({isFetched: isFetched, isLoading: isLoading});

  if (isLoading) {
      return <span>Loading...</span>
  }

  if (isError) {
      return <span>Error: {error.message}</span>
  }
    
  // if (isFetched) {
  //     return <span>isFetched...</span>
  // }
    
 
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">RICK AND MORTY WITH REACT QUERY</h1>
              <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                {
                    data.map((character:any)=> <div key={character.id}> 
                        <Card character={character}/>
                    </div>)
                }    
              </div>          
        </div>
        {isLoading ?? "LOADING ...."}
    </section>
  );
}

export default Home;