import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import bandRouter from "./api/bands/band.router";
import genreRouter from "./api/genres/genre.router";
import "./db/connection";
import { errorHandler } from "./error/error-handler";
import authRouter from "./api/auth/auth.router";
import cookieParser from "cookie-parser";
import albumRouter from "./api/albums/album.router";
import memberRouter from "./api/members/member.router";

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());
app.use(cookieParser());

app.use("/bands", bandRouter);
app.use("/genres", genreRouter);
app.use("/auth", authRouter);
app.use("/albums", albumRouter);
app.use("/members", memberRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.clear();
  console.log(
    `[server]: Server is running at http://localhost:${port}\nmode: ${process.env.NODE_ENV}`
  );
});
