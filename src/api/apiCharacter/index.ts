import http from "..";
export const getCharacter = () => {
   return http.get<any>('/character');
}

export const getDetailCharacter = (id: any) => {
   return http.get<any>(`/character/${id}`);
}