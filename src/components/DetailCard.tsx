import React from 'react'
import { useQueryClient, useIsFetching } from '@tanstack/react-query';

const DetailCard: React.FC<any> = ({data}) => {
    const queryClient = useQueryClient();
    const listenFetching = useIsFetching(["characters", 1]); // lang nghe trang thai fetching 
    console.log("get globel value queryClient so it: ", queryClient.getQueryData(["characters", 1] )); // het thoi gian caheTime thi gia tri se la undefined
    console.log("get globel value queryClient so nhieu: ", queryClient.getQueriesData(["characters", 1] )); // het thoi gian caheTime thi gia tri se la undefined
    console.log("=============================="); // het thoi gian caheTime thi gia tri se la undefined
    console.log("status: ",listenFetching); // het thoi gian caheTime thi gia tri se la undefined return 0 isn't fetching


  return (
    <>
    {
        data &&   <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={`${data.image}`} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.name}</div>
            <p className="text-gray-700 text-base">
                {data.gender}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.species}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.status}</span>
        </div>
        </div>  
    }
      
    
    </>
    )
}

export default DetailCard