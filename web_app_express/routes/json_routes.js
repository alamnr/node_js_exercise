/*
*  Json Routes
*/

var express = require('express');

var jsonRouter = express.Router();

var users = [{ id: 1, name: 'John', professon:'Developer', age:30 },
            { id: 2, name: 'Sina', professon:'Scrum Master', age:38 },
            { id: 3, name: 'Mike', professon:'Sr. Developer', age:35 },
        ];
jsonRouter.get('/data.json', function(req, res) {
    //res.send(' Hello Express! ');
    // load data from db here
    /*res.render('index', {
        title: 'My App',
        items: todoItems
    });*/
    res.send(JSON.stringify(users));
});

/*router.post('/add', function(req,res){
	var newItem = req.body.newItem;
	console.log(newItem);
	todoItems.push({id:todoItems.length+1,desc:newItem});
	res.redirect('/');
});*/

module.exports = jsonRouter;