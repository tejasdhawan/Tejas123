var a =require('./controller/root')();


module.exports = function (app)
{
	console.log("controller come in routes...");
	app.get("/",a.list);
	//app.get("/add",a.insert);
	// app.get("/login",a.login);
	// app.post("/login",a.check);
	app.get("/offers",a.offers);
	app.get("/nutri",a.nutri);
	app.get("/about",a.about);
	app.get("/contact",a.contact);
	app.get("/checkout",a.checkout);
	app.get("/order",a.order)
	app.get("/add",a.add);
	app.post("/add",a.insert1);
	app.get("/check",a.check1);
	app.post("/check",a.check);
	app.get("/update",a.update);
	app.post("/update",a.update1);
	app.get("/read",a.read)
	app.post("/read",a.read1);
	app.get("/forgot",a.forgot);
	app.post("/forgot",a.forgot1);
}
  