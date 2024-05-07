import React, { useState } from "react";
import Button from "../components/Button/Button";
import Dropdown from "../components/Dropdown/Dropdown";
import Choice from "../components/Choice/Choice";
import NumberField from "../components/NumberField/NumberField";
import StyledPageUpper from "../components/styledPageUpper/StyledPageUpper";
import { useNavigate } from "react-router-dom";

const carOptions = [
  {
    title: "BMW",
    logoSrc: "https://i.ebayimg.com/images/g/FXAAAOSwZYhjjOIE/s-l1600.png",
  },
  {
    title: "Audi",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
  },
];

const carBodyType = [
  {
    title: "Kupeja",
  },
  {
    title: "Mikroautobuss",
  },
];

const models = [
  { title: "a3" },
  { title: "a2" },
  { title: "a4" },
  { title: "a6" },
];

const colorOptions = [
  {
    title: "Sarkana",
    colorCode: "FF0000",
  },
];

const gearboxTypes = ["Manuāls", "Automāts"];
const engineTypes = ["Dīzelis", "Benzīns", "Elektriskais", "Hibrīds"];

export default function MakeScreen(tele) {
  const [formData, setFormData] = useState({
    car: "",
    carBody: "",
    model: "",
    color: "",
    gearbox: "",
    engine: "",
    yearStart: "",
    yearEnd: "",
    volumeStart: "",
    volumeEnd: "",
    mileageStart: "",
    mileageEnd: "",
  });

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate("/eval", { state: formData });
    Meteor.call(
      "links.insertLink",
      {
        model: formData.model,
        year: formData.yearStart,
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
    updateFormData(field, value);
  };

  return (
    <div className="pageContainer">
      <StyledPageUpper />
      <Dropdown
        title="Mašīnas marka"
        options={carOptions}
        onSelect={onSelect("car", "carLogo")}
      />
      <Dropdown
        title="Mašīnas virsbūves tips"
        options={carBodyType}
        onSelect={onSelect("carBody")}
      />
      <Dropdown
        title="Mašīnas modelis"
        options={models}
        onSelect={onSelect("model")}
      />
      <Dropdown
        title="Mašīnas krāsa"
        options={colorOptions}
        onSelect={onSelect("color")}
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
      <NumberField
        title="Tilpums"
        onChangeStart={(value) => updateFormData("volumeStart", value)}
        onChangeEnd={(value) => updateFormData("volumeEnd", value)}
      />
      <NumberField
        title="Nobraukums"
        onChangeStart={(value) => updateFormData("mileageStart", value)}
        onChangeEnd={(value) => updateFormData("mileageEnd", value)}
      />
      <Button buttonText="Apstiprināt" onClick={handleFormSubmit} />
    </div>
  );
}
