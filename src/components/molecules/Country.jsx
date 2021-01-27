import React from "react";

import "../../scss/countryInfoCovid.scss";
import CountryBoxData from "../atoms/CountryBoxData";
import ConfirmIcon from "../icons/ConfirmIcon"
import RecoveredIcon from "../icons/RecoveredIcon"
import DeathIcon from "../icons/DeathIcon"
import SicksIcon from "../icons/SicksIcon"


const Country = (props) => {

  const dataCovid = props.dataCovid[props.dataCovid.length - 1]

  return (
    <div className="countryCovid_grid">

      <CountryBoxData color="yellow"
        title="Confirms"
        Icon={ConfirmIcon}
        dataCountry={dataCovid}
        value="Confirmed" />

      <CountryBoxData color="red"
        title="Deaths"
        Icon={DeathIcon}
        dataCountry={dataCovid}
        value="Deaths" />

      <CountryBoxData color="blue"
        title="Sicks"
        Icon={SicksIcon}
        dataCountry={dataCovid}
        value="Active" />

      <CountryBoxData color="green"
        title="Recovered"
        Icon={RecoveredIcon}
        dataCountry={dataCovid}
        value="Recovered" />

    </div>

  );
}

export default Country;