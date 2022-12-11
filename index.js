import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {

  //For Mongo Db
 //const users = User.find({$regex: q})

  const { q } = req.query;

  console.log(q);

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 20)) : res.json(Users.slice(0, 20));
});

app.listen(5000, () => console.log("API is working!"));
