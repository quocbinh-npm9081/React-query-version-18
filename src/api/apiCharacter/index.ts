import http from "..";
import { ICharacters } from "../../types/character.type";
export const getCharacter = () => {
   return http.get<any>('/character');
}