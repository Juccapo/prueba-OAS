"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scoreController_1 = require("../controllers/scoreController");
class ScoreRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', scoreController_1.scoreController.index);
    }
}
const scoreRoutes = new ScoreRoutes();
exports.default = scoreRoutes.router;
