export const baseUrl = "https://u2play.pondoksoftware.com";


export const PostUrl = baseUrl + "/api/v1/posts";
export const getPostByIdUrl = (id) => PostUrl + `/id/${id}`;
export const getPostByIdUrl2 = (id) => PostUrl + `/post_id/${id}`;

export const tournamentUrl = baseUrl + "/api/v1/tournament";
export const listtournamentALLUrl = baseUrl + "/api/v1/tournament/details";
export const listtournamentUrl = baseUrl + "/api/v1/tournament/detail";
export const edittournamentUrl = (id) => baseUrl + `/api/v1/tournament/update/${id}`;
export const uploadImageSingle = baseUrl + "/api/v1/uploads/primary";

export const categoryUrl = baseUrl + "/api/v1/category";
export const categorybyIdUrl = (id) => categoryUrl + `/id/${id}`;

export const usersUrl = baseUrl + "/api/v1/users";
export const getUsersByIdUrl = (id) => usersUrl + `/id/${id}`;
