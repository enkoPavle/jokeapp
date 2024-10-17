import React from "react"
import {StyleProp, ViewStyle} from "react-native"

import * as SVGIcons from "@/constants/icons"

import {SVGIconNames} from "@/types/icons"

interface IProps {
  name: SVGIconNames
  style?: StyleProp<ViewStyle>
  width?: number
  height?: number
}

export const SVGIcon: React.FC<IProps> = ({name, style, width = 24, height = 24}) => {
  // eslint-disable-next-line import/namespace
  const IconComponent = SVGIcons[name].default

  return <IconComponent width={width} height={height} style={style} />
}
