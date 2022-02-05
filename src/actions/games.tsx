// SET_USERNAME
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

// RESET_GAME
export const resetCurrentGame = () => ({
    type: 'RESET_GAME'
});

// START_TIMING
export const startTiming = () => ({
    type: 'START_TIMING',
    startTime: new Date().getTime()
});

// END_TIMING
export const endTiming = () => ({
    type: 'END_TIMING',
    endTime: new Date().getTime()
});

export const useLetter = (letter: string) => ({
    type: 'USE_LETTER',
    usedLetter: letter
});
