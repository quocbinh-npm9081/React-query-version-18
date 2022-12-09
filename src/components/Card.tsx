import React from 'react'
import { Link } from 'react-router-dom';
const Card: React.FC<any> = ({character}) => {
  return (
    <div >
        <div className="lg:flex" >
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={`${character.image}`} alt=""/>
            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <Link to={`detail/character/${character.id}`}  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                {
                    character.name
                }
                </Link>                      
            <span className="text-sm text-gray-500 dark:text-gray-300">{character.created}</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">{character.species}</span>
            </div>
        </div> 
    </div>
  )
}

export default Card;