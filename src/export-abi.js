"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinedAbi = void 0;
// combinedAbi.ts
const StokeFireAbi_1 = require("./StokeFireAbi");
const fs = __importStar(require("fs"));
exports.combinedAbi = [
    ...StokeFireAbi_1.attackFacetAbi,
    ...StokeFireAbi_1.buildFacetAbi,
    ...StokeFireAbi_1.defendFacetAbi,
    ...StokeFireAbi_1.diamondAbi,
    ...StokeFireAbi_1.resourceFacetAbi,
    ...StokeFireAbi_1.stokeFacetAbi,
    ...StokeFireAbi_1.villageFacetAbi,
];
fs.writeFileSync('outputAbi.json', JSON.stringify(exports.combinedAbi, null, 2), 'utf-8');
