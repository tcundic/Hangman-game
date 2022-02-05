import Game from "./game";
import Highscore from "./highscore";

export default interface Props {
    game?: Game,
    highscores?: Array<Highscore>,
    dispatch: Function
};