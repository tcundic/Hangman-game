import Game from "./game";

export default interface GameAction extends Partial<Game> {
    type: string
}