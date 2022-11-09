var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var mongodb = require('mongodb')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var shoe = require("./models/shoe");
require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appRouter = require('./routes/shoe');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shoe', appRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await shoe.deleteMany();
 let instance1 = new
shoe({Shoe_Name:"Sneakers", Shoe_Company:'Adidas',Shoe_Size:9.0,Shoe_Rating:4.7});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First shoe details saved")
 });
 let instance2 = new
 shoe({Shoe_Name:"Formals", Shoe_Company:'Nike',Shoe_Size:10.0,Shoe_Rating:4.2});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second shoe details saved")
  });
  let instance3 = new
  shoe({Shoe_Name:"Causal", Shoe_Company:'Puma',Shoe_Size:11.0,Shoe_Rating:4.6});
   instance3.save( function(err,doc) {
   if(err) return console.error(err);
   console.log("Third shoe details saved")
   });
}
let reseed = true;
if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
