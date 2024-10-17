import {FC} from "react"

import {colors} from "@/constants/colors"
import * as SVGIcons from "@/constants/icons"

import {SVGIconNames} from "@/types/icons"

interface Props {
  name: SVGIconNames
  width?: number
  height?: number
  color?: string
}

export const SVGIcon: FC<Props> = ({
  name,
  width = 20,
  height = 20,
  color = colors.black
}) => {
  /* eslint-disable import/namespace */
  const IconComponent = SVGIcons[name].default

  return <IconComponent width={width} height={height} stroke={color} />
}
