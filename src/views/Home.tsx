import {useState, useEffect} from 'react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import Card from '../components/Card';
import { getCharacter } from '../api/apiCharacter';

const Home = () => {
 const [characters, setSharacters] = useState<any>([]);
 const [error, setError] = useState<any>();
 const queryClient = useQueryClient();

 const fetchAllCharacter = async () => {   
  const response = await getCharacter();
  return response.data.results;
 }  

  const {isError, isSuccess, isLoading, data } = useQuery(['characters'],fetchAllCharacter, {staleTime: 60000} )

    useEffect(() => {

  console.log("mounted")
      
  }, [])

  if (isLoading) {
      return <span>Loading...</span>
  }

  if (isError) {
      return <span>Error: {error.message}</span>
  }
    
 
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