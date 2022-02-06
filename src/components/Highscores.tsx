import React, {useEffect} from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import {mapDispatchToProps, mapStateToProps} from "../utils/utilMethods";
import {getHighscores} from "../utils/http";
import {setHighscores} from "../actions/highscores";

export const Highscores = (props: Props) => {

    const getNewHighscores = async () => {
        const highscores = (await getHighscores())?.data;

        if (highscores) {
            props.dispatch(setHighscores(highscores));
        }
    }

    useEffect(() => {
    }, []);

    return (
        <div className="container mt-6">
            <div>HIGHSCORES</div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Highscores);