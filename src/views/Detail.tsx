import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getDetailCharacter } from '../api/apiCharacter';
import DetailCard from '../components/DetailCard';
const Detail = () => {
  const  {id}  = useParams();

  const fetchApi = async (context:any) =>{
    console.log("call api")
    const respone = await getDetailCharacter(context.queryKey[1]);
    return respone.data;    
  }

  const {isLoading, isError , data} = useQuery(["detailCharacter", id] ,fetchApi, {
    retry: 1,
    retryDelay:500,
    cacheTime: 10000,
    staleTime:6000,
    refetchOnWindowFocus: false,
   enabled: id? true : false //<-- day la Dependent  // khi nao co id thi moi call api  
  })

  console.log("isLoading: ", isLoading);
  if(isLoading){
    return  <h1>Loading ...</h1>
  }

  return (
    <div className='flex justify-center align-center flex-col'>
    <DetailCard data={data} />    
    
    </div>
  )
}

export default Detail