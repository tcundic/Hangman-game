// SET_USERNAME
import Game from "../models/game";

export const setUserName = (userName: string) => ({
    type: 'SET_USERNAME',
    userName
});

// SET_QUOTE
export const setQuote = (quoteId: string, content: string) => ({
    type: 'SET_QUOTE',
    quoteId,
    content
});

// INCREMENT_ERROR
export const incrementError = () => ({
    type: 'INCREMENT_ERROR'
});

// START_TIMING
export const startTiming = () => ({
    type: 'START_TIMING'
});

// END_TIMING
export const endTiming = () => ({
    type: 'END_TIMING'
});
