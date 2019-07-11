import express from "express";
// const express = require("express");

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res, next) => res.send("Hello from home");

const handleProfile = (req, res, next) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
  console.log("between");
  next();
};

// app.use(betweenHome);

app.get("/",betweenHome, handleHome);

app.get("/profile", handleProfile);


app.listen(PORT, handleListening);
