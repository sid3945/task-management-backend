require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log("Connected to MongoDB");
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
}).catch((error) => {
	console.error("MongoDB connection error:", error);
});