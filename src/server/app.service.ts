import { Injectable } from "@nestjs/common";
import ax from "axios";

const axios  = ax.create({ baseURL: "https://jsonplaceholder.typicode.com"});

@Injectable()
export class AppService {
 async getPosts() {
   const res = await axios.get("/posts");
   return res.data;
 }
}
