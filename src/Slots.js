function createSlotObject(text, available){
  return {
    text,
    available
  }
}

const slots = []
const slotObj = {
  morning: [],
  evening: [],
  night: []
}

for( let i=10; i < 22; i++ ){
  let s1,s2
  if( i < 12 ){
    s1 = `${i}:00 AM`
    s2 = `${i}:30 AM`
  }
  else if ( i === 12 ){
    s1 = `12:00 PM`
    s2 = `12:30 PM`
  }
  else {
    s1 = `0${i % 12}:00 PM`
    s2 = `0${i % 12}:30 PM`
  }
  
  slots.push(createSlotObject(s1,false))
  slots.push(createSlotObject(s2,false))
}

slots.push(createSlotObject('10:00 PM',true))
slots.push(createSlotObject('10:30 PM',true))
slots.push(createSlotObject('11:00 PM',true))


for( let i=0; i < slots.length; i++){
  if( i / 9 < 1)
    slotObj["morning"].push(slots[i]);
  else if ( i / 9 < 2)
    slotObj["evening"].push(slots[i]);
  else 
    slotObj["night"].push(slots[i]);
}

const disabledSlots = {
  "12:30 PM" : true,
  "03:00 PM" : true,
  "03:30 PM" : true,
  "08:00 PM" : true,
  "10:30 PM" : true,
  "11:00 PM" : true
}

export default slots
export { slotObj, disabledSlots }