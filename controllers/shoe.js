var shoe = require('../models/shoe');
// List of all shoes
exports.shoe_list = function(req, res) {
    res.send('NOT IMPLEMENTED: shoe list');
};
// for a specific shoe.
exports.shoe_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await shoe.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle shoe create on POST.
exports.shoe_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shoe();
    document.Shoe_Name = req.body.Shoe_Name;
    document.Shoe_Company = req.body.Shoe_Company;
    document.Shoe_Size = req.body.Shoe_Size;
    document.Shoe_Rating = req.body.Shoe_Rating;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle shoe delete form on DELETE.
exports.shoe_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
};

// Handle shoe update form on PUT.

exports.shoe_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: shoe update PUT' + req.params.id);
};

exports.shoe_list = async function(req, res) {
    try{
        theshoes = await shoe.find();
        res.send(theshoes);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

//Handle shoe update form on PUT.
exports.shoe_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await shoe.findById( req.params.id)
        // Do updates of properties
        if(req.body.Shoe_Name)
               toUpdate.Shoe_Name = req.body.Shoe_Name;
        if(req.body.Shoe_Company) toUpdate.Shoe_Company = req.body.Shoe_Company;
        if(req.body.Shoe_Size) toUpdate.Shoe_Size = req.body.Shoe_Size;
        if(req.body.Shoe_Rating) toUpdate.Shoe_Rating = req.body.Shoe_Rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// VIEWS
// Handle a show all view

exports.shoe_view_all_Page = async function(req, res) {
    try{
        theshoes = await shoe.find();
        res.render('shoe', { title: 'shoe Search Results', results: theshoes });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};