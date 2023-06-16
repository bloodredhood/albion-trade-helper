/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { FC, useEffect, useState } from "react";

const MainOld: FC = () => {
  const [isLoaded, setIsLoaded] = useState(true)

  interface IStateItem {
    item_id: string,
    city: string,
    quality: number,
    sell_price_min: number,
    sell_price_min_date: string,
    sell_price_max: number,
    sell_price_max_date: string,
    buy_price_min: number,
    buy_price_min_date: string,
    buy_price_max: number,
    buy_price_max_date: string
  } 

  const [rocks, setRocks] = useState(Array<IStateItem>)
  const [stoneblocks, setStoneblocks] = useState(Array<IStateItem>)
  const [fibers, setFibers] = useState(Array<IStateItem>)
  const [clothes, setClothes] = useState(Array<IStateItem>)
  const [hides, setHides] = useState(Array<IStateItem>)
  const [leathers, setLeathers] = useState(Array<IStateItem>)
  const [ores, setOres] = useState(Array<IStateItem>)
  const [metalbars, setMetalbars] = useState(Array<IStateItem>)
  const [woods, setWoods] = useState(Array<IStateItem>)
  const [planks, setPlanks] = useState(Array<IStateItem>)

  const sell = "8% tax"
  const buy = "0% tax"
  const buyorder = "2.5% tax"

  useEffect(() => {
    const rock = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_rock%2Ct7_rock%2Ct6_rock%2Ct5_rock%2Ct4_rock%2Ct3_rock%2Ct2_rock.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      stoneblock = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_stoneblock%2Ct7_stoneblock%2Ct6_stoneblock%2Ct5_stoneblock%2Ct4_stoneblock%2Ct3_stoneblock%2Ct2_stoneblock.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      fiber = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_fiber%2Ct7_fiber%2Ct6_fiber%2Ct5_fiber%2Ct4_fiber%2Ct3_fiber%2Ct2_fiber.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      cloth = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_cloth%2Ct7_cloth%2Ct6_cloth%2Ct5_cloth%2Ct4_cloth%2Ct3_cloth%2Ct2_cloth.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      hide = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_hide%2Ct7_hide%2Ct6_hide%2Ct5_hide%2Ct4_hide%2Ct3_hide%2Ct2_hide.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      leather = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_leather%2Ct7_leather%2Ct6_leather%2Ct5_leather%2Ct4_leather%2Ct3_leather%2Ct2_leather.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      ore = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_ore%2Ct7_ore%2Ct6_ore%2Ct5_ore%2Ct4_ore%2Ct3_ore%2Ct2_ore.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      metalbar = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_metalbar%2Ct7_metalbar%2Ct6_metalbar%2Ct5_metalbar%2Ct4_metalbar%2Ct3_metalbar%2Ct2_metalbar.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      wood = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_wood%2Ct7_wood%2Ct6_wood%2Ct5_wood%2Ct4_wood%2Ct3_wood%2Ct2_wood.json?locations=bridgewatch%2Cmartlock%2Cthetford",
      plank = "https://west.albion-online-data.com/api/v2/stats/Prices/t8_plank%2Ct7_plank%2Ct6_plank%2Ct5_plank%2Ct4_plank%2Ct3_plank%2Ct2_plank.json?locations=bridgewatch%2Cmartlock%2Cthetford"



    const goods = [rock, stoneblock, fiber, cloth, hide, leather, ore, metalbar, wood, plank]
    const statesSets = [setRocks, setStoneblocks, setFibers, setClothes, setHides, setLeathers, setOres, setMetalbars, setWoods, setPlanks]


    if (isLoaded) {
      //@ts-ignore
      const requester = async (str, f) => {
        const resp = await axios.get(str)
        f(resp.data)
      }

      for (let i = 0; i < goods.length; i++) {
        requester(goods[i], statesSets[i])
      }

      setIsLoaded(false)
    }
  }, [isLoaded])

  return (
    isLoaded? "...loading" :
    <div>
      {rocks.map(el => <div>{el.item_id}</div>)}

      <div>        Bridgewatch
        Martlock
        Thetford</div>
    </div>
  )
}

export default MainOld