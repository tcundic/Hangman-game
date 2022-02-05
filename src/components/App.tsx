import React from 'react';
import {connect} from 'react-redux';
import Game from "../models/game";
import Highscore from "../models/highscore";
import Props from "../models/Props";
import {setUserName} from "../actions/games";

class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    state = {
        username: ''
    };

    onUsernameSave = (): void => {
        this.props.dispatch(setUserName(this.state.username));
    };

    onUsernameChange = (e: React.ChangeEvent<any>): void => {
        const username = e.target.value;
        this.setState(() => ({username}));
    }

    render() {
        return (
            <div className="container mt-6">
                <label className="label is-large">Username</label>
                <div className="field is-grouped">
                    <p className="control">
                        <input
                            className="input is-large"
                            type="text"
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={this.onUsernameChange}
                        />
                    </p>
                    <p className="control">
                        <a className="button is-info is-large" onClick={this.onUsernameSave}>
                            Save username
                        </a>
                    </p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state: { game: Game, highscores: Array<Highscore> }) => {
    return {
        game: state.game
    };
};

export default connect(mapStateToProps)(App);