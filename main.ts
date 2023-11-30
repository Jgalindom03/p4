import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.error("No mongo URL found");
  Deno.exit(1);
}
try{
await mongoose.connect(MONGO_URL);
}
catch(e){
  console.log("error");
}
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});