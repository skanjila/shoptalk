/**
* Feed.js
*
* @description :: This is the actual raw feed that will be stored and parsed
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  adapter: 'sails-cassandra',

  attributes: {
    id: 'INTEGER',
    dataType: 'STRING',
    generatedBy: 'STRING',
    name: 'STRING',
    title: 'STRING',
    description: 'STRING',
    image: 'STRING',
    sourceName: 'STRING',
    sourceURL: 'STRING',
    postedByName: 'STRING',
    postedByUserId: 'STRING',
    postedToType: 'STRING',
    postedToName: 'STRING',
    postedToUserId: 'STRING',
    link: 'STRING',
    itemPrice: 'STRING',
    itemListPrice: 'STRING',
    itemDescription: 'STRING',
    itemPromotion: 'STRING',
    itemAvailableSizes: 'STRING',
    itemAvailableColors: 'STRING',
    itemAvailableLocations: 'STRING',
    itemMeasure: 'STRING',
    itemHeight: 'STRING',
    itemWeight: 'STRING',
    itemDepth: 'STRING',
    itemShoulder : 'STRING',
    itemWaist : 'STRING'
  }
};

