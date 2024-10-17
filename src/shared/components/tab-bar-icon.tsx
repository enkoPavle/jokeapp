import {SVGIcon} from "./svg-icon"

import {SVGIconNames} from "@/types/icons"

export const TabBarIcon = (props: Readonly<{name: SVGIconNames; color: string}>) => {
  return <SVGIcon {...props} />
}
