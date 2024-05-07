import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";

Meteor.methods({
  "links.insertLink"({ model, year }) {
    LinksCollection.insertAsync({ model, year, createdAt: new Date() });
  },
});
Meteor.methods({
  "links.appendRecentData"({ linkId, newData }) {
    console.log(linkId);
    console.log(newData);

    LinksCollection.update(linkId, {
      $set: { newData },
    });
  },
});
Meteor.startup(async () => {
  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });
});
