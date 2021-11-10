export const baseUrl = "https://u2play.pondoksoftware.com";


export const PostUrl = baseUrl + "/api/v1/posts";
export const tournamentUrl = baseUrl + "/api/v1/tournament";
export const listtournamentUrl = baseUrl + "/api/v1/tournament/detail";
export const edittournamentUrl = (id) => baseUrl + `/api/v1/tournament/update/${id}`;
