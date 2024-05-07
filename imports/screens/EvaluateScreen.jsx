import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";

export default function EvaluateScreen({ onCheckout, tele }) {
  const location = useLocation();
  const formData = location.state;

  useEffect(() => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  });

  return (
    <div className="evaluationContainer">
      <h2>Dati</h2>
      <div className="vehicleContainer">
        <div className="vehicleData">
          <div className="vehicleCarLogo">
            <b>Firma: </b>
            {formData.car}
          </div>
          <div className="vehicleModel">
            <b>Modelis: </b>
            {formData.model}
          </div>
          <div className="vehicleCarBody">
            <b>Virsbūves veids: </b>
            {formData.carBody}
          </div>
          <div className="vehicleColor">
            <b>Krāsa: </b>
            {formData.color}
          </div>
          <div className="vehicleGearbox">
            <b>Ātr. kārba: </b>
            {formData.gearbox}
          </div>
          <div className="vehicleEngine">
            <b>Dzinējs: </b>
            {formData.engine}
          </div>
          <div className="vehicleYear">
            <b>Gads: </b>
            {formData.yearStart} - {formData.yearEnd}
          </div>
          <div className="vehicleEngineVolume">
            <b>Dzin. tilpums: </b>
            {formData.volumeStart}L - {formData.volumeEnd}L
          </div>
          <div className="vehicleMileage">
            <b>Nobraukums: </b>
            {formData.mileageStart}km - {formData.mileage}km
          </div>
        </div>
      </div>
    </div>
  );
}
