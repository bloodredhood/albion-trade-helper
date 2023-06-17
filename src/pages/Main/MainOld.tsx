/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Panel from "./components/Panel";
import { goods } from "./queries"

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

interface ISortedItem {
  itemName: string,
  city: string,
  buyPrice: number,
  sellPrice: number,
}

export interface IPanelItem {
  itemName: string,
  city1: string,
  city2: string,
  buyPrice: number,
  sellPrice: number,
  gain: number
}

const MainOld: FC = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [isData, setIsData] = useState(false)

  const [state, setState] = useState(Array<IPanelItem>)

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


  // const sell = "8% tax"
  // const buy = "0% tax"
  // const buyorder = "2.5% tax"

  // const bestsell = "sell_price_min"
  // const bestbuy = "buy_price_max"



  useEffect(() => {

    if (isLoaded) {
      axios.get(goods[0]).then(resp => setRocks(resp.data))
      axios.get(goods[1]).then(resp => setStoneblocks(resp.data))
      axios.get(goods[2]).then(resp => setFibers(resp.data))
      axios.get(goods[3]).then(resp => setClothes(resp.data))
      axios.get(goods[4]).then(resp => setHides(resp.data))
      axios.get(goods[5]).then(resp => setLeathers(resp.data))
      axios.get(goods[6]).then(resp => setOres(resp.data))
      axios.get(goods[7]).then(resp => setMetalbars(resp.data))
      axios.get(goods[8]).then(resp => setWoods(resp.data))
      axios.get(goods[9]).then(resp => setPlanks(resp.data))

      setTimeout(() => {
        setIsLoaded(false)
        setIsData(true)
      }, 1000);
    }

  }, [isLoaded])

  useEffect(() => {

    if (isData) {
      const states = [rocks, stoneblocks, fibers, clothes, hides, leathers, ores, metalbars, woods, planks]
      //console.log(states[0])

      const mappingState = (states: Array<IStateItem>) => {
        const tierSorter = (arr: Array<IStateItem>) => {
          const result: Array<IPanelItem> = []
          const sorted: Array<Array<ISortedItem>> = [[], [], [], [], [], [], []]
          //console.log(arr)
          arr.forEach((el, idx) => {
            if (idx < 3) {
              sorted[0].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            } else if (idx >= 3 && idx < 6) {
              sorted[1].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            } else if (idx >= 6 && idx < 9) {
              sorted[2].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            } else if (idx >= 9 && idx < 12) {
              sorted[3].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            } else if (idx >= 12 && idx < 15) {
              sorted[4].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            } else if (idx >= 15 && idx < 18) {
              sorted[5].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            } else if (idx >= 18 && idx < 21) {
              sorted[6].push({
                itemName: el.item_id,
                city: el.city,
                sellPrice: el.buy_price_max,
                buyPrice: el.sell_price_min,
              })
            }
          })

          // console.log(sorted)
          sorted.forEach(el => {
            result.push({
              itemName: el[0].itemName,
              city1: el[0].city,
              city2: el[1].city,
              buyPrice: el[0].buyPrice,
              sellPrice: el[1].sellPrice,
              gain: Math.floor(((el[1].sellPrice - (el[1].sellPrice * 0.08) - el[0].buyPrice)/ el[0].buyPrice) * 100)
            })
            result.push({
              itemName: el[0].itemName,
              city1: el[1].city,
              city2: el[0].city,
              buyPrice: el[1].buyPrice,
              sellPrice: el[0].sellPrice,
              gain: Math.floor(((el[0].sellPrice - (el[0].sellPrice * 0.08) - el[1].buyPrice)/ el[1].buyPrice) * 100)
            })
            result.push({
              itemName: el[0].itemName,
              city1: el[1].city,
              city2: el[2].city,
              buyPrice: el[1].buyPrice,
              sellPrice: el[2].sellPrice,
              gain: Math.floor(((el[2].sellPrice - (el[2].sellPrice * 0.08) - el[1].buyPrice)/ el[1].buyPrice) * 100)
            })
            result.push({
              itemName: el[0].itemName,
              city1: el[2].city,
              city2: el[1].city,
              buyPrice: el[2].buyPrice,
              sellPrice: el[1].sellPrice,
              gain: Math.floor(((el[1].sellPrice - (el[1].sellPrice * 0.08) - el[2].buyPrice)/ el[2].buyPrice) * 100)
            })
            result.push({
              itemName: el[0].itemName,
              city1: el[0].city,
              city2: el[2].city,
              buyPrice: el[0].buyPrice,
              sellPrice: el[2].sellPrice,
              gain: Math.floor(((el[2].sellPrice - (el[2].sellPrice * 0.08) - el[0].buyPrice)/ el[0].buyPrice) * 100)
            })
            result.push({
              itemName: el[0].itemName,
              city1: el[2].city,
              city2: el[0].city,
              buyPrice: el[2].buyPrice,
              sellPrice: el[0].sellPrice,
              gain: Math.floor(((el[0].sellPrice - (el[0].sellPrice * 0.08) - el[2].buyPrice)/ el[2].buyPrice) * 100)
            })
          })
          console.log(result)
          return result
        }
        //@ts-ignore
        const res = []

        states.forEach((item) => {
          //@ts-ignore
          tierSorter(item).forEach(el => res.push(el))
        })
        //@ts-ignore
        return res

      }
      //@ts-ignore
      setState(mappingState(states))

      setIsData(false)
    }

  }, [isData, rocks, stoneblocks, fibers, clothes, hides, leathers, ores, metalbars, woods, planks])

  // itemName={el.itemName} city1={el.city1} city2={el.city2} buyPrice={el.buyPrice} sellPrice={el.sellPrice} gain={el.gain}

  return (
    isLoaded ? "...loading" :
      <div>
        {state.map(el => el.gain > 0 && <Panel {...el} />)}
      </div>
  )
}

export default MainOld