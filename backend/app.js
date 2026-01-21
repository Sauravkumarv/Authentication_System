import express from "express";
import "dotenv/config"
import  {dbConnect, pool} from "./src/config/db.js";
import router from "./src/routes/auth.routes.js";
import cors from "cors"

const app = express();

await dbConnect();
app.use(cors({
  origin:process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))


 app.use("/api",router)


const port=process.env.PORT||5000
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})