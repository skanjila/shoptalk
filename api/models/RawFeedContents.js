/**
 * Created by abhijit on 5/6/2015.
 */
module.exports = {

    attributes	: {

        id: 'INTEGER',
        dataType: 'STRING',
        generatedBy: 'STRING',
        name: 'STRING',
        title:'STRING',
        description:'STRING',
        image:'STRING',
        source:{name:'STRING', url:'STRING'},
        postedBy:{name:'STRING',user_id:'STRING'},
        postedTo:{type:'STRING',name:'STRING',user_id:'STRING'}, //How would you show a endless list in this schema?
        link:'STRING',
        itemPrice:'STRING',
        itemListPrice: 'STRING',
        itemDescription:'STRING',
        itemPromotion:'STRING',
        itemAvailableSizes:{size1:'STRING'},//Need an expandable array here too
        itemAvailableColors:{color1:'STRING',hexValue:'HEX'},//Need an expandable array here as well
        itemAvailableLocations:{location1:'STRING'},//NEed an expandable array
        itemDimensions:{measure:'STRING',height:'FLOAT',width:'FLOAT',depth:'FLOAT',shoulder:'FLOAT',waist:'FLOAT'}
    }
};