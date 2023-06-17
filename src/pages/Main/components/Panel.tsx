import { IPanelItem } from "../MainOld"

const Panel = ({itemName, city1, city2, buyPrice, sellPrice, gain} : IPanelItem) => {

  return (
    <div style={{display:"flex", justifyContent: "space-evenly"}}>
      <div style={{backgroundColor: "grey"}}>{itemName}</div>
      <div>from {city1} {buyPrice} to {city2} {sellPrice} </div>
      <div style={{backgroundColor: "grey", padding:"0px 20px"}}>{gain}</div>
    </div>
  )
}

export default Panel