import React from "react"

import slot from "../css/SlotColumn.module.css"

export default function SlotColumn(props){
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
					</fieldset>
					<div>
						<div className={ slot.day } id="selected-day">
							<span> 
								<div className={slot["left-arrow"]}>
								</div>
							</span>
							<span>Today(Sun,7Aug)</span>
							<span>
								<div className={slot["right-arrow"]}>
								</div>
							</span>
						</div>
						<table className={ slot.table }>
							<tbody>
								<tr>
									<th rowspan="3"> Morning</th>
									<td>10:00 AM</td>
									<td>10:30 AM</td>
									<td>11:00 AM</td>
								</tr>
								<tr>
									<td>11:30 AM</td>
									<td>12:00 PM</td>
									<td>12:30 PM</td>
								</tr>
								<tr>
									<td>01:00 PM</td>
									<td>01:30 PM</td>
									<td>02:00 PM</td>
								</tr>
								<tr>
									<th rowspan="3">Evening</th>
									<td>02:30 PM</td>
									<td>03:00 PM</td>
									<td>03:30 PM</td>
								</tr>
								<tr>
									<td>04:00 PM</td>
									<td>04:30 PM</td>
									<td>05:00 PM</td>
								</tr>
								<tr>
									<td>05:30 PM</td>
									<td>06:00 PM</td>
									<td>06:30 PM</td>
								</tr>
								<tr>
									<th rowspan="3">Night</th>
									<td>07:00 PM</td>
									<td>07:30 PM</td>
									<td>08:00 PM</td>
								</tr>
								<tr>
									<td>08:30 PM</td>
									<td>09:00 PM</td>
									<td>09:30 PM</td>
								</tr>
								<tr>
									<td>10:00 PM</td>
									<td>10:30 PM</td>
									<td>11:00 PM</td>
								</tr>
							</tbody>  
						</table>
					</div>
					<button>
						Continue
					</button>    
				</div>
			</div>
		</section>
		)
	}