"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = require("../controllers/registerController");
class RegisterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', registerController_1.registerController.def_equipo);
    }
}
const registerRoutes = new RegisterRoutes();
exports.default = registerRoutes.router;
