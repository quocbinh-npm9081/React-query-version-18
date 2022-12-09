import React, {useState} from 'react';
import DetailCard from '../components/DetailCard';
import { getDetailCharacter } from '../api/apiCharacter';
import { useQuery } from '@tanstack/react-query';
const Pagination = () => {
    const [page,setPages] = useState<number>(1);
    const fetchDetalCharacter = async (context:any) =>{
    console.log("cal api ");    
    const response = await getDetailCharacter(context.queryKey[1]);
    return response.data;
    }

    const {isError, isLoading,isPreviousData, data} = useQuery(["getCharacter", page], fetchDetalCharacter, {
        cacheTime: 10000,
        staleTime:6000,
        refetchOnWindowFocus: false,
        keepPreviousData: true});
    console.log("isLoading", isLoading);
   
    if(isLoading){
        return <h1>isLoading ...</h1>
    }

    const bnClass = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"

  return (
    <div className='flex justify-center align-center flex-col'>
    <DetailCard data={data} />    
    <div className="inline-flex">
  <button className={!isPreviousData? bnClass : `${bnClass} bg-red-300 hover:bg-red-400` } disabled={page === 1 || isPreviousData} onClick={()=> setPages((prev:number)=> prev - 1 )}>
    {isPreviousData ? "stop" : "Prev"}
  </button>
  <button className={!isPreviousData? bnClass : `${bnClass} bg-red-300 hover:bg-red-400` } disabled={page === 100 || isPreviousData} onClick={()=> setPages((prev:number)=> prev + 1 )}>
    Next
  </button>
</div>    </div>  )
};

export default Pagination;