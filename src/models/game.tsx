export default interface Game {
    quoteId: string,
    content: string,
    length: number,
    uniqueCharacters: number,
    userName: string,
    errors: number,
    duration: number,
    usedLetters: Array<string>,
    revealedLetters: Array<string>
}