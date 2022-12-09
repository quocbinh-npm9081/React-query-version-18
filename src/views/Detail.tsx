import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getDetailCharacter } from '../api/apiCharacter';
import DetailCard from '../components/DetailCard';
const Detail = () => {
  const  {id}  = useParams();

  const fetchApi = async (id:any) =>{
    const respone = await getDetailCharacter(id)
    return respone.data;    
  }

  const {isLoading, isError , data} = useQuery(["detailCharacter"] ,()=>fetchApi(id), {
    retry: 1,
    retryDelay:500,
    cacheTime: 10000,
    staleTime:6000,
    refetchOnWindowFocus: false,
    enabled: id? true : false //<-- day la Dependent  // khi nao co id thi moi call api  
  })

  return (
    <div className='flex justify-center align-center'>
    <DetailCard data={data} />    
    </div>
  )
}

export default Detail