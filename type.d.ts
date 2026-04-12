/// <reference types="uniwind/types" />
import type { ImageSourcePropType } from "react-native"

declare global {
  type TabIconProps = {
    focused: boolean
    icon: ImageSourcePropType
  }
}
