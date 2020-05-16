import React, { useState, useEffect } from "react"

import slot from "../css/SlotColumn.module.scss"
import SlotTable from "./SlotTable"

import { shortDays as days, shortMonths as months} from "../dateUtils"

export default function SlotColumn(props){

	const [selectedDate, setDate] = useState(new Date())
	const [showLoader, toggleLoader] = useState(false)
	const [slotObj, setSlotObj] = useState({})

	const formattedDate = date => 
		`${days(date.getDay())}, ${date.getDate()} ${months(date.getMonth())}`


	useEffect(() => {
		async function fetchData() {
			const date = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
			const url = `http://localhost:3001/api?date=${date}`

			console.log(url)
			toggleLoader(true)
			const res = await fetch(url)
			res
				.json()
				.then(res => {
					console.log("response",res)
					setSlotObj(res)
					toggleLoader(false)
				})
				.catch(err => console.log("error",err))
		}

		fetchData();
	},[selectedDate]);	
	
	const handleDateChange= (op) => {
		const date = selectedDate
		const dayDuration = 86400000
		if( op === "next" ){
			setDate(new Date(date.getTime() + dayDuration))
		}
			
		if( op === "previous")
			setDate(new Date(date.getTime() - dayDuration))
	}
		
	return (
		<section className={slot.section}>
			<div className={slot.widget}>
				<div className={slot.header}>
					<div>Book Appointment</div>
					<div>Have an Enquiry?</div>
				</div>
				<div className={ slot["widget-body"] }>
					<fieldset>
						<legend> Purpose </legend>
						<select name="purpose" id="purpose">
							<option value="consultation">Consultation</option>
							<option value="regular checkup">Regular Checkup</option>
							<option value="followup">FollowUp</option>
						</select>
						<div className={slot["down-arrow"]}></div>
					</fieldset>
					<div>
						<div className={ slot.day } id="selected-day">
							<span onClick={ ev => handleDateChange("previous")}> 
								<div className={slot["left-arrow"]}>
								</div>
							</span>
							<span>{ formattedDate(selectedDate) }</span>
							<span onClick={ ev => handleDateChange("next")}>
								<div className={slot["right-arrow"]}>
								</div>
							</span>
						</div>
						{ showLoader ?
							<div className={slot.loader}> 
								<h2>Loading...</h2>
							</div> :
							<SlotTable slotObj={slotObj} />
						}
						
					</div>
					<button>
						Continue
					</button>    
				</div>
			</div>
		</section>
		)
	}