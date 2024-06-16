import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";

Meteor.methods({
  "links.insertLink"({
    model,
    car,
    carBody,
    gearbox,
    engine,
    yearStart,
    yearEnd,
    volumeStart,
    volumeEnd,
    mileageStart,
    mileageEnd,
    priceStart,
    priceEnd,
  }) {
    LinksCollection.insertAsync({
      model,
      car,
      carBody,
      gearbox,
      engine,
      year: [yearStart, yearEnd],
      volume: [volumeStart, volumeEnd],
      mileage: [mileageStart, mileageEnd],
      price: [priceStart, priceEnd],
      createdAt: new Date(),
    });
  },
});
Meteor.methods({
  "links.appendRecentData"({ linkId, newData }) {
    LinksCollection.update(linkId, {
      $set: { newData },
    });
  },
});
Meteor.startup(async () => {
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
});
