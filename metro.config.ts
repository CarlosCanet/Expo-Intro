/// <reference types="node" />
import { getDefaultConfig } from "expo/metro-config.js"
import { withUniwindConfig } from "uniwind/metro"

const config = getDefaultConfig(process.cwd())

// @ts-expect-error -- type mismatch between @expo/metro and metro-file-map internal types
export default withUniwindConfig(config, {
  cssEntryFile: "./global.css",
  dtsFile: "./uniwind-types.d.ts",
})
