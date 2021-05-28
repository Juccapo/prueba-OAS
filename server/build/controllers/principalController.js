"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.principalController = void 0;
class PrincipalController {
    index(req, res) {
        res.send('Hello 1');
    }
}
exports.principalController = new PrincipalController();
