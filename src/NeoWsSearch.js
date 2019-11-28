import React from "react";
import DatePicker from "react-datepicker";

const NeoWsSearch = ({
    startDate,
    endDate,
    startDateChangeHandler,
    endDateChangeHandler,
    onClickHandler
}) => {
    return (
          <div className={`container-fluid text-center pl-0 pr-0 pt-2 pb-2 text-white`}>
            Date de début :
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              className="uk-input"
              onChange={startDateChangeHandler}
              // ici onChange est équivalent à :
              // onChange={function(date) {
              //    setStartDate(date);
              // }}
            />
            Date de fin :
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              className="uk-input"
              onChange={endDateChangeHandler}
            />
            <button className="uk-button uk-button-primary" onClick={onClickHandler}>
              RECHERCHER
            </button>
          </div>
      );
};

export default NeoWsSearch;