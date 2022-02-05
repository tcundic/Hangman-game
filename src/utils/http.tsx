import axios from 'axios';

const QUOTABLE_API = 'https://api.quotable.io';
const INGEMARK_API = 'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task'

const httpClient = (url: string) => axios.create({
    baseURL: url,
    headers: {
        "Content-type": "application/json"
    }
});

const getRandomQuote = async () => {
    try {
        const res = await httpClient(QUOTABLE_API).get<{_id: string, content: string}>("/random");
        return {id: res.data._id, content: res.data.content};
    } catch (e) {
        console.error("Error while fetching quote!");
    }
};

const sendStatistics = (
    {quoteId, length, uniqueCharacters, userName, errors, duration}:
        {quoteId: string, length: number, uniqueCharacters: number, userName: string, errors: number, duration: number}) => {
    httpClient(INGEMARK_API).post("/highscores", {
        quoteId,
        length,
        uniqueCharacters,
        userName,
        errors,
        duration
    });
};

export {getRandomQuote, sendStatistics};