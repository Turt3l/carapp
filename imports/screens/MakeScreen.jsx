import React, { useState } from "react";
import Button from "../components/Button/Button";
import Dropdown from "../components/Dropdown/Dropdown";
import Choice from "../components/Choice/Choice";
import NumberField from "../components/NumberField/NumberField";
import StyledPageUpper from "../components/styledPageUpper/StyledPageUpper";
import data from "../../formData.json";
import { useNavigate } from "react-router-dom";

const gearboxTypes = ["Manuāls", "Automāts"];
const engineTypes = ["Dīzelis", "Benzīns", "Elektriskais", "Hibrīds"];

export default function MakeScreen() {
  const [formData, setFormData] = useState({
    car: "",
    carBody: "",
    model: "",
    gearbox: "",
    engine: "",
    yearStart: "",
    yearEnd: "",
    volumeStart: "",
    volumeEnd: "",
    mileageStart: "",
    mileageEnd: "",
    priceStart: "",
    priceEnd: "",
  });

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate("/eval", { state: formData });
    Meteor.call(
      "links.insertLink",
      {
        model: formData.model,
        car: formData.car,
        carBody: formData.carBody,
        gearbox: formData.gearbox,
        engine: formData.engine,
        yearStart: formData.yearStart,
        yearEnd: formData.yearEnd,
        volumeStart: formData.volumeStart,
        volumeEnd: formData.volumeEnd,
        mileageStart: formData.mileageStart,
        mileageEnd: formData.mileageEnd,
        priceStart: formData.priceStart,
        priceEnd: formData.priceEnd,
      },
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      }
    );
  };

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const onSelect = (field) => (value) => {
    console.log(field);
    updateFormData(field, value);
  };

  const getModelsForSelectedCar = () => {
    const selectedCar = data.vehicle.make
      .find((make) => make.brand === formData.car)
      .sort();
    return selectedCar ? selectedCar.models : [];
  };

  return (
    <div className="pageContainer">
      <StyledPageUpper />
      <Dropdown
        title="Mašīnas marka"
        options={data.vehicle.make.map((make) => make.brand).sort()}
        onSelect={onSelect("car")}
      />
      <Dropdown
        title="Mašīnas virsbūves tips"
        options={data.vehicle.bodyType}
        onSelect={onSelect("carBody")}
      />
      <Dropdown
        title="Mašīnas modelis"
        options={getModelsForSelectedCar()}
        onSelect={onSelect("model")}
      />
      <Choice
        title="Mašīnas ātr. kārba"
        options={gearboxTypes}
        onSelect={onSelect("gearbox")}
      />
      <Choice
        title="Dzinējs"
        options={engineTypes}
        onSelect={onSelect("engine")}
      />
      <NumberField
        title="Gads"
        onChangeStart={(value) => updateFormData("yearStart", value)}
        onChangeEnd={(value) => updateFormData("yearEnd", value)}
      />
      <Dropdown
        title="Dzinēja sākuma izmērs"
        options={data.vehicle.engineSizes}
        onSelect={onSelect("volumeStart")}
      />
      <Dropdown
        title="Dzinēja beigu izmērs"
        options={data.vehicle.engineSizes}
        onSelect={onSelect("volumeEnd")}
      />
      <NumberField
        title="Nobraukums"
        onChangeStart={(value) => updateFormData("mileageStart", value)}
        onChangeEnd={(value) => updateFormData("mileageEnd", value)}
      />
      <NumberField
        title="Cena"
        onChangeStart={(value) => updateFormData("priceStart", value)}
        onChangeEnd={(value) => updateFormData("priceEnd", value)}
      />
      <Button buttonText="Apstiprināt" onClick={handleFormSubmit} />
    </div>
  );
}
