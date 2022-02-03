import Highscore from "./highscore";

export default interface HighscoresAction {
    type: string,
    highscores: Array<Highscore>
}