import React from 'react';
import {connect} from 'react-redux';
import {Navigate} from "react-router-dom";
import Props from "../models/Props";
import {setUserName} from "../actions/games";
import {mapDispatchToProps, mapStateToProps} from "../utils/utilMethods";

export class App extends React.Component<Props> {
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
        if (this.props.game?.userName) {
            return <Navigate to="/play" />;
        }

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
                        <button className="button is-info is-large" onClick={this.onUsernameSave}>
                            Save username
                        </button>
                    </p>
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);