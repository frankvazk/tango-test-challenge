import express, { Router } from "express";
import { Express } from "express";
import * as fibonacci from "../components/fibonacci/network";

const routes = (server: Express) => {
  server.use("/api/fibonacci", fibonacci.router);
};

export { routes };
