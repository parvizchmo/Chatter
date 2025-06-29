const express = require("express");
const router = express.Router();
const driverController = require("../controllers/userController");

// Погода
router.get("/weather", driverController.getWeather);

// Карточки водителей
router.post("/info/card", driverController.createDriver);
router.get("/info/card", driverController.getDrivers);
router.get("/info/card/:id", driverController.getDriverById);
router.delete("/info/card/:id", driverController.deleteDriver);

module.exports = router;
