"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("./data.json"));
function nx(item) {
    if (item == 0) {
        console.log("zero");
    }
    else {
        console.log(item);
    }
}
console.log(data_json_1.default);
