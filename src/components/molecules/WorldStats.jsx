import React from "react";
import { APP_API_DATA_WORLD } from "../../config/env";
import useFetch from "../../hooks/useFetch";
import ConfirmIcon from "../icons/ConfirmIcon"
import DeathIcon from "../icons/DeathIcon"
import RecoveredIcon from "../icons/RecoveredIcon"
import "../../scss/worldStats.scss";

const WorldStats = () => {

    const dataWorld = useFetch(APP_API_DATA_WORLD, {})

    return (
        <div className="worldStats card">

            <p className="worldStats_title">Datos mundiales</p>
            <div className="worldStats_stats">

                <p className="worldStats_text yellow">
                    Positivos: <strong> {dataWorld.data.confirmed?.value}</strong>
                    <ConfirmIcon />
                </p>

                <p className="worldStats_text red">
                    Fallecidos: <strong> {dataWorld.data.deaths?.value}</strong>
                    <DeathIcon />
                </p>

                <p className="worldStats_text green">
                    Sanados: <strong> {dataWorld.data.recovered?.value}</strong>
                    <RecoveredIcon />
                </p>
            </div>
        </div>
    );
}

export default WorldStats;