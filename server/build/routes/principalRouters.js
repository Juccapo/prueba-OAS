"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const principalController_1 = require("../controllers/principalController");
class PrincipalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', principalController_1.principalController.index);
    }
}
const principalRoutes = new PrincipalRoutes();
exports.default = principalRoutes.router;
