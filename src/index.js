import express from "express";
import './config.js'
import { errorHandle } from "./middleware/errorHandle.js";
import employeesRoutes from "./routes/employee.routes.js";
import home from "./routes/index.routes.js";
const app = express();

app.use(express.json());
app.use(home);
app.use("/api/employee", employeesRoutes);
app.use(errorHandle);

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log("Server started on port:", port);
});
