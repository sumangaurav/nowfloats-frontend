import React from "react"

import TextColumn from "./TextColumn"
import SlotColumn from "./SlotColumn"

import mainbody from "../css/MainBody.module.css"

export default function MainBody(props){
	return(
		<main>
			<TextColumn />
			<SlotColumn />
		</main>
	)
} 