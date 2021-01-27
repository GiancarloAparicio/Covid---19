import React from 'react';

const CountryBoxData = ({ title, color, Icon, dataCountry, value }) => {

  return (
    <div className=" countryCovid_box card ">
      <p className="countryCovid_box_title">{title}</p>
      <div className={`countryCovid_box_data ${color}`}>
        <Icon />
        <p> {dataCountry ? dataCountry[value] : "0"} </p>
      </div>
    </div>
  );
}

export default CountryBoxData