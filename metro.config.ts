// @ts-nocheck
import { getDefaultConfig } from "expo/metro-config";
import { withUniwindConfig } from "uniwind/metro";
const config = getDefaultConfig(__dirname);

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./global.css",
  dtsFile: "./uniwind-types.d.ts",
});
