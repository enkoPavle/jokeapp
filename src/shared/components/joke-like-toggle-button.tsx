import React from "react"
import {Pressable, StyleSheet} from "react-native"

import {SVGIcon} from "./svg-icon"
import {useActions} from "../hooks"

import {colors} from "@/constants/colors"

import {Joke} from "@/types/jokes"

interface Props extends Pick<Joke, "id" | "isLiked"> {
  size?: "md" | "lg"
}

export const JokeLikeToggleButton: React.FC<Props> = ({id, isLiked, size = "md"}) => {
  const backgroundColor = colors[isLiked ? "purple" : "lightPurple"]
  const color = colors[isLiked ? "white" : "purple"]
  const buttonSize = size === "md" ? 48 : 64

  const {toggleJokeLike} = useActions()

  return (
    <Pressable
      style={[styles.container, {width: buttonSize, height: buttonSize, backgroundColor}]}
      onPress={() => toggleJokeLike(id)}
    >
      <SVGIcon name={isLiked ? "fav_filled" : "fav"} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999
  }
})
