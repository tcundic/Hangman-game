import React, {useEffect} from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import {mapDispatchToProps, mapStateToProps} from "../utils/utilMethods";
import {getHighscores} from "../utils/http";
import {setHighscores} from "../actions/highscores";
import Highscore from "../models/highscore";

export const Highscores = (props: Props) => {

    const getNewHighscores = async () => {
        const highscores = (await getHighscores())?.data;

        if (highscores) {
            props.dispatch(setHighscores(highscores));
        }
    }

    useEffect(() => {
        getNewHighscores();
    }, []);

    return (
        <div className="container mt-6">
            <h2 className="mb-5">HIGHSCORES</h2>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>Quote ID</th>
                    <th>Quote Length</th>
                    <th>Unique Characters</th>
                    <th>User Name</th>
                    <th>Number Of Errors</th>
                    <th>Solving Duration</th>
                </tr>
                </thead>
                <tbody>
                {props.highscores?.map((highscore: Highscore) => {
                    return (
                        <tr>
                            <td>{highscore.quoteId}</td>
                            <td>{highscore.length}</td>
                            <td>{highscore.uniqueCharacters}</td>
                            <td>{highscore.userName}</td>
                            <td>{highscore.errors}</td>
                            <td>{highscore.duration}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Highscores);