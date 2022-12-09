import http from "..";
export const getEpisode = () => {
    return http.get<any>('/episode');
 }