import React, { useState } from "react";

const Forecast: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [tickerName, setTickerName] = useState<string>("");
  const [forecastValue, setForecastValue] = useState<number | null>(null); //replace 'null' with the actual forecast value

  const handleForecast = () => {
    // Perform the forecast calculation here and update the forecastValue state
    // For now i'm setting a sample value
    setForecastValue(123.45);
  };

  return (
    <div className="forecast-container">
      <h1>Stock Forecast AI</h1>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tickerName" className="form-label">
          Ticker Name
        </label>
        <input
          type="text"
          className="form-control"
          id="tickerName"
          value={tickerName}
          onChange={(e) => setTickerName(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleForecast}
      >
        Get Forecast
      </button>
      <div className="mt-3">
        <label htmlFor="forecastValue" className="form-label">
          Forecasted Value
        </label>
        <input
          type="text"
          className="form-control"
          id="forecastValue"
          value={forecastValue !== null ? forecastValue.toFixed(2) : ""}
          readOnly
        />
      </div>
    </div>
  );
};

export default Forecast;
