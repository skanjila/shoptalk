/*---------------------
 :: Players
 -> model
 ---------------------*/
module.exports = {

    attributes	: {

        id: 'INTEGER',
        type:  'STRING',
        name: 'STRING',
        title:'STRING',
        description:'STRING',
        image:'STRING',
        source:{name:'STRING', url:'STRING'},
        postedBy:{name:'STRING',user_id:'STRING'},
        link:'STRING'
    }
};