#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_1 = __importDefault(require("../node"));
let dataFilePath = process.argv.length > 2 ? process.argv[2] : './data.json';
let data = require(path_1.default.join(process.cwd(), dataFilePath));
let PORT = process.env.NODE_PORT || 3000;
let app = express_1.default();
process.argv.forEach((arg, index) => {
    // allow a custom port via CLI
    if (arg === '--p' && process.argv.length > index + 1) {
        PORT = process.argv[index + 1];
    }
});
app.use(cors_1.default());
app.use('/', node_1.default(data));
app.listen(PORT);
let msg = `GraphQL server running with your data at http://localhost:${PORT}/`;
console.log(msg); // eslint-disable-line no-console
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
//# sourceMappingURL=json-graphql-server.js.map