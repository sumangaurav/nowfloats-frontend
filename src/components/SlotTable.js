import React from "react"
import ReactTooltip from "react-tooltip"

import slot from "../css/SlotColumn.module.scss"
import morningSrc from "../images/morning.svg"
import eveningSrc from "../images/evening.svg"
import nightSrc from "../images/night.svg"

import { disabledSlots } from "../Slots"

export default function SlotTable({slotObj}){

  const newSlotObj = {}

  for( let tod in slotObj){
    newSlotObj[tod] = [];
    for( let i=0; i < 3; i++){
      newSlotObj[tod].push([
        slotObj[tod][3*i],
        slotObj[tod][3*i + 1],
        slotObj[tod][3*i + 2]
      ])
    }
  }

	return (
    <React.Fragment>
      <table className={ slot.table }>
        <tbody>
          {
            Object.keys(newSlotObj).map( (tod) =>{
              return newSlotObj[tod].map( (row, ind) => {
                return (
                  <tr key={`${tod}-${ind}`}>
                    { 
                      ( ind === 0 ) && 
                      <th rowSpan="3">
                        <div>
                          { tod === 'morning' ?
                              <img src={morningSrc}/>: 
                              (tod === 'evening') ?
                                <img src={eveningSrc} /> :
                                <img src={nightSrc}/>
                          }
                        </div>
                        <div>{tod}</div>
                      </th>
                    }
                    { 
                      ( row[0].available && !disabledSlots[row[0].text]) ? 
                      <td data-tip data-for="available" className={slot.available}>
                        { row[0].text }
                      </td> :
                      <td data-tip data-for="unavailable" className={slot.strikeText}>
                        { disabledSlots[row[0].text] ? "-" : row[0].text }
                      </td>
                    }
                    { 
                      ( row[1].available && !disabledSlots[row[1].text]) ? 
                      <td data-tip data-for="available" className={slot.available}>
                        { row[1].text }
                      </td> :
                      <td data-tip data-for="unavailable" className={slot.strikeText}>
                        { disabledSlots[row[1].text] ? "-" : row[1].text }
                      </td>
                    }
                    { 
                      ( row[2].available && !disabledSlots[row[2].text]) ? 
                      <td data-tip data-for="available" className={slot.available}>
                        { row[2].text }
                      </td> :
                      <td data-tip data-for="unavailable" className={slot.strikeText}>
                        { disabledSlots[row[2].text] ? "-" : row[2].text }
                      </td>
                    }
                    {/* <td className={!row[0].available ? slot.strikeText : null}>
                      { disabledSlots[row[0].text] ? "-" : row[0].text }
                    </td>
                    <td className={!row[0].available ? slot.strikeText : null}>
                      { disabledSlots[row[1].text] ? "-" : row[0].text }
                    </td>
                    <td className={!row[0].available ? slot.strikeText : null}>
                      { disabledSlots[row[2].text] ? "-" : row[0].text }
                    </td> */}
                  </tr>
                )
              })
            })
          }
        </tbody>  
      </table>
      <ReactTooltip id="available" place="top" type="light" border={true} borderColor={slot.borderColor} effect="float">
          <span> Slot is available </span>
      </ReactTooltip>
      <ReactTooltip id="unavailable" place="top" type="light" border={true} borderColor={slot.borderColor} effect="float">
        <span> Slot is unavailable </span>
      </ReactTooltip>
    </React.Fragment>
  
  )
}