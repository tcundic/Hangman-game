const getUniqueLetters = (quote: string) => new Set(quote.replace(/[^A-Za-z]/g, "").toLowerCase());

export {getUniqueLetters};
