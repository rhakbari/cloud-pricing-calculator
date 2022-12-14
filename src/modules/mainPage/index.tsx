import React, { useEffect, useState, useReducer } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import SubHeading from '../../components/subHeading'
import TabList from '../../components/tabList'
import CustomizedAccordions from '../../components/accordian'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import GeneralPurpose from '../../products/virtualInstance/generalPurpose'
import HighPerformance1 from '../../products/virtualInstance/highPerformance1'
import HighPerformance2 from '../../products/virtualInstance/highPerformance2'
import BareMetal from '../../products/virtualInstance/bareMetal'
import EvsSSD from '../../products/storage/evs-ssd'
import EvsHDD from '../../products/storage/evs-hdd'
import EvsESS from '../../products/storage/evs-ess'
import EvsOSS from '../../products/storage/evs-oss'
import Egress from '../../products/network/egress'
import LoadBalancer from '../../products/network/loadBalancer'
import ElasticIP from '../../products/network/eip'

const baseUrl = `${process.env.NEXT_PUBLIC_MIDDLEWARE}/api/v1`

interface DataType {
  resources: any[]
  price: number
  id: number
  quantity: any
  gpCount: number
  hp1Count: number
  hp2Count: number
  bmCount: number
  ssdCount: number
  hddCount: number
  essCount: number
  ossCount: number
  egressCount: number
  eipCount: number
  slbCount: number
}

interface Action {
  type: string
  payload?: any
}

const initialData = {
  resources: [],
  price: 0,
  id: 1,
  quantity: '',
  gpCount: 1,
  hp1Count: 1,
  hp2Count: 1,
  bmCount: 1,
  ssdCount: 1,
  hddCount: 1,
  essCount: 1,
  ossCount: 1,
  egressCount: 1,
  eipCount: 1,
  slbCount: 1,
}

let estimateData = []
const reducer = (state: DataType, action: Action) => {
  let duplicateArray = []

  let index = 0

  estimateData = state.resources.map((item: any) => {
    return {}
  })

  switch (action.type) {
    case 'ADD_RESOURCE':
      // debugger;
      return {
        ...state,
        resources: [
          ...state.resources,
          {
            itemType: action.payload.itemType,
            type: action.payload.id,
            os: null,
            skuName: null,
            instanceType: 0,
            server: null,
            serverName: null,
            specsName: null,
            quantity: '',
            id: state.id,
            price: 0,
            unitPrice: 0,
            gpCount: state.gpCount,
            hp1Count: state.hp1Count,
            hp2Count: state.hp2Count,
            bmCount: state.bmCount,
            ssdCount: state.ssdCount,
            hddCount: state.hddCount,
            essCount: state.essCount,
            ossCount: state.ossCount,
            egressCount: state?.egressCount,
            eipCount: state?.eipCount,
            slbCount: state?.slbCount,
          },
        ],
        itemType: action.payload.itemType,
        id: state.id + 1,
        gpCount:
          action.payload.itemType == 'gp' || action.payload.id == 'gp'
            ? state?.gpCount + 1
            : state?.gpCount,
        hp1Count:
          action.payload.itemType == 'hp1' || action.payload.id == 'hp1'
            ? state?.hp1Count + 1
            : state?.hp1Count,
        hp2Count:
          action.payload.itemType == 'hp2' || action.payload.id == 'hp2'
            ? state?.hp2Count + 1
            : state?.hp2Count,
        bmCount:
          action.payload.itemType == 'bm' || action.payload.id == 'bm'
            ? state?.bmCount + 1
            : state?.bmCount,
        ssdCount:
          action.payload.itemType == 'ssd' || action.payload.id == 'ssd'
            ? state?.ssdCount + 1
            : state?.ssdCount,
        hddCount:
          action.payload.itemType == 'hdd' || action.payload.id == 'hdd'
            ? state?.hddCount + 1
            : state?.hddCount,
        essCount:
          action.payload.itemType == 'ess' || action.payload.id == 'ess'
            ? state?.essCount + 1
            : state?.essCount,
        ossCount:
          action.payload.itemType == 'oss' || action.payload.id == 'oss'
            ? state?.ossCount + 1
            : state?.ossCount,
        egressCount:
          action.payload.itemType == 'egress' || action.payload.id == 'egress'
            ? state?.egressCount + 1
            : state?.egressCount,
        eipCount:
          action.payload.itemType == 'eip' || action.payload.id == 'eip'
            ? state?.eipCount + 1
            : state?.eipCount,
        slbCount:
          action.payload.itemType == 'slb' || action.payload.id == 'slb'
            ? state?.slbCount + 1
            : state?.slbCount,
      }

    case 'REMOVE_RESOURCE':
      duplicateArray = [...state.resources]
      let deletedItem: any = duplicateArray.find(
        (item: any) => item.id == action.payload.index,
      )

      index = duplicateArray.findIndex(
        (item: DataType) => item.id === action.payload.index,
      )

      duplicateArray.splice(index, 1)

      let finalResources = duplicateArray.map(
        (item: any, itemIndex: number) => {
          if (deletedItem?.type == 'gp')
            return {
              ...item,
              gpCount:
                item.gpCount > 1 && item.id > index
                  ? item.gpCount - 1
                  : item.gpCount,
            }
          if (deletedItem?.type == 'hp1')
            return {
              ...item,
              hp1Count:
                item.hp1Count > 1 && item.id > index
                  ? item.hp1Count - 1
                  : item.hp1Count,
            }
          if (deletedItem?.type == 'hp2')
            return {
              ...item,
              hp2Count:
                item.hp2Count > 1 && item.id > index
                  ? item.hp2Count - 1
                  : item.hp2Count,
            }
          if (deletedItem?.type == 'bm')
            return {
              ...item,
              bmCount:
                item.bmCount > 1 && item.id > index
                  ? item.bmCount - 1
                  : item.bmCount,
            }
          if (deletedItem?.type == 'ssd')
            return {
              ...item,
              ssdCount:
                item.ssdCount > 1 && item.id > index
                  ? item.ssdCount - 1
                  : item.ssdCount,
            }
          if (deletedItem?.type == 'hdd')
            return {
              ...item,
              hddCount:
                item.hddCount > 1 && item.id > index
                  ? item.hddCount - 1
                  : item.hddCount,
            }
          if (deletedItem?.type == 'ess')
            return {
              ...item,
              essCount:
                item.essCount > 1 && item.id > index
                  ? item.essCount - 1
                  : item.essCount,
            }
          if (deletedItem?.type == 'oss')
            return {
              ...item,
              ossCount:
                item.ossCount > 1 && item.id > index
                  ? item.ossCount - 1
                  : item.ossCount,
            }
          if (deletedItem?.type == 'egress')
            return {
              ...item,
              egressCount:
                item.egressCount > 1 && item.id > index
                  ? item.egressCount - 1
                  : item.egressCount,
            }
          if (deletedItem?.type == 'eip')
            return {
              ...item,
              eipCount:
                item.eipCount > 1 && item.id > index
                  ? item.eipCount - 1
                  : item.eipCount,
            }
          if (deletedItem?.type == 'slb')
            return {
              ...item,
              slbCount:
                item.slbCount > 1 && item.id > index
                  ? item.slbCount - 1
                  : item.slbCount,
            }
        },
      )

      if (deletedItem?.type == 'gp') {
        state.gpCount = state.gpCount - 1
      } else if (deletedItem?.type == 'hp1') {
        state.hp1Count = state.hp1Count - 1
      } else if (deletedItem?.type == 'hp2') {
        state.hp2Count = state.hp2Count - 1
      } else if (deletedItem?.type == 'bm') {
        state.bmCount = state.bmCount - 1
      } else if (deletedItem?.type == 'ssd') {
        state.ssdCount = state.ssdCount - 1
      } else if (deletedItem?.type == 'hdd') {
        state.hddCount = state.hddCount - 1
      } else if (deletedItem?.type == 'ess') {
        state.essCount = state.essCount - 1
      } else if (deletedItem?.type == 'oss') {
        state.ossCount = state.ossCount - 1
      } else if (deletedItem?.type == 'egress') {
        state.egressCount = state.egressCount - 1
      } else if (deletedItem?.type == 'eip') {
        state.eipCount = state.eipCount - 1
      } else if (deletedItem?.type == 'slb') {
        state.slbCount = state.slbCount - 1
      }
      return {
        ...state,
        // resources: duplicateArray,
        resources: finalResources,
      }

    case 'COPY_RESOURCE':
      duplicateArray = [...state.resources]
      // debugger
      index = duplicateArray.findIndex(
        (item: DataType) => item.id === action.payload.index,
      )

      let duplicateObject = {
        ...duplicateArray[index],
      }

      if (duplicateObject?.type == 'gp') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          gpCount:
            action.payload.id == 'gp' ? state?.gpCount + 1 : state?.gpCount,
        }
        state.gpCount = state.gpCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'hp1') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          hp1Count:
            action.payload.id == 'hp1' ? state?.hp1Count + 1 : state?.hp1Count,
        }
        state.hp1Count = state.hp1Count + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'hp2') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          hp2Count:
            action.payload.id == 'hp2' ? state?.hp2Count + 1 : state?.hp2Count,
        }
        state.hp2Count = state.hp2Count + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'bm') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          bmCount:
            action.payload.id == 'bm' ? state?.bmCount + 1 : state?.bmCount,
        }
        state.bmCount = state.bmCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'ssd') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          ssdCount:
            action.payload.id == 'ssd' ? state?.ssdCount + 1 : state?.ssdCount,
        }
        state.ssdCount = state.ssdCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'hdd') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          hddCount:
            action.payload.id == 'hdd' ? state?.hddCount + 1 : state?.hddCount,
        }
        state.hddCount = state.hddCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'ess') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          essCount:
            action.payload.id == 'ess' ? state?.essCount + 1 : state?.essCount,
        }
        state.essCount = state.essCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'oss') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          ossCount:
            action.payload.id == 'oss' ? state?.ossCount + 1 : state?.ossCount,
        }
        state.ossCount = state.ossCount + 1
      } else if (duplicateObject?.type == 'egress') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          egressCount:
            action.payload.id == 'egress'
              ? state?.egressCount + 1
              : state?.egressCount,
        }
        state.egressCount = state.egressCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'eip') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          eipCount:
            action.payload.id == 'eip' ? state?.eipCount + 1 : state?.eipCount,
        }
        state.eipCount = state.eipCount + 1
        state.id = state.id + 1
      } else if (duplicateObject?.type == 'slb') {
        duplicateObject = {
          ...duplicateArray[index],
          id: state.id,
          slbCount:
            action.payload.id == 'slb' ? state?.slbCount + 1 : state?.slbCount,
        }
        state.slbCount = state.slbCount + 1
        state.id = state.id + 1
      }

      duplicateArray.splice(state.resources.length + 1, 0, duplicateObject)
      return {
        ...state,
        resources: duplicateArray,
      }

    case 'SET_RESOURCE_DATA':
      duplicateArray = [...state.resources]
      debugger
      index = duplicateArray.findIndex(
        (item: DataType) => item.id === action.payload.id,
      )
      console.log('SET_RESOURCE_DATA', index)

      duplicateArray[index] = {
        ...duplicateArray[index],
        ...action.payload.data,
      }

      duplicateArray[index].price =
        duplicateArray[index].unitPrice * (duplicateArray[index].quantity ? parseInt(duplicateArray[index].quantity) : 0)

      return {
        ...state,
        resources: duplicateArray,
      }

    default:
      return state
  }
}

const MainPage = () => {
  const [resourceData, dispatch] = useReducer(reducer, initialData)
  const [id, setId] = useState<number>(1)

  //////////////API Data////////////////

  const [apiData, setApiData] = useState<any>()

  //////////////Filtered Data State Variables////////////////

  const [ecsData, setEcsData] = useState<any>([])
  const [volumeData, setVolumeData] = useState<any>([])
  const [networkData, setNetworkData] = useState<any>([])
  const [bareMetal, setBareMetal] = useState<any>([])

  const callAPI = async () => {
    try {
      const res = await fetch(`${baseUrl}/pricing`)
      const resData = await res.json()
      const data = JSON.parse(resData.data)
      setApiData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    callAPI()
  }, [])

  useEffect(() => {
    if (apiData) {
      let ecs = apiData.ecs
      let volume = apiData.volume
      let network = apiData.network
      let bareM = apiData.bareMetal

      setEcsData(ecs)
      setBareMetal(bareM)
      setVolumeData(volume)
      setNetworkData(network)
      // console.log(apiData);
    }
  }, [apiData])

  const decreaseCount = (ids: number) => {
    dispatch({ type: 'REMOVE_RESOURCE', payload: { index: ids } })
  }
  const add = (itemType: string) => {
    dispatch({
      type: 'ADD_RESOURCE',
      payload: { id: itemType, itemType: itemType },
    })
  }
  const copy = (id: number) => {
    dispatch({ type: 'COPY_RESOURCE', payload: { index: id } })
  }

  const increaseGPCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'gp', itemType: 'gp' } })
  }

  const modifyData = (data: any) => {
    debugger
    dispatch({ type: 'SET_RESOURCE_DATA', payload: data })
  }

  const increaseHP1Count = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'hp1', itemType: 'hp1' } })
  }

  const increaseHP2Count = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'hp2', itemType: 'hp2' } })
  }

  const increaseBMCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'bm', itemType: 'bm' } })
  }

  // ////////////////////////Storage/////////////////////

  const increaseSsdCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'ssd', itemType: 'ssd' } })
  }

  const increaseHddCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'hdd', itemType: 'hdd' } })
  }

  const increaseEssCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'ess', itemType: 'ess' } })
  }

  const increaseOssCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'oss', itemType: 'oss' } })
  }

  const increaseEgressCount = () => {
    dispatch({
      type: 'ADD_RESOURCE',
      payload: { id: 'egress', itemType: 'egress' },
    })
  }

  const increaseEipCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'eip', itemType: 'eip' } })
  }

  const increaseSlbCount = () => {
    dispatch({ type: 'ADD_RESOURCE', payload: { id: 'slb', itemType: 'slb' } })
  }

  const componentMapping: (type: string, props: object) => JSX.Element = (
    type: string,
    props: object,
  ) => {
    const commonProps = {
      decreaseCount,
      modifyData,
      copy,
      add,
    }
    switch (type) {
      case 'gp':
        return (
          <GeneralPurpose
            {...props}
            {...commonProps}
            decreaseCount={decreaseCount}
            modifyData={modifyData}
            copy={copy}
            ecsData={ecsData}
            key={id}
          />
        )
      case 'hp1':
        return (
          <HighPerformance1
            {...props}
            {...commonProps}
            modifyData={modifyData}
            decreaseCount={decreaseCount}
            copy={copy}
            ecsData={ecsData}
            key={id}
          />
        )
      case 'hp2':
        return (
          <HighPerformance2
            {...props}
            {...commonProps}
            decreaseCount={decreaseCount}
            modifyData={modifyData}
            copy={copy}
            ecsData={ecsData}
            key={id}
          />
        )
      case 'bm':
        return (
          <BareMetal
            {...props}
            {...commonProps}
            decreaseCount={decreaseCount}
            copy={copy}
            bareMetal={bareMetal}
            key={id}
          />
        )
      case 'ssd':
        return (
          <EvsSSD
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            volumeData={volumeData}
          />
        )

      case 'hdd':
        return (
          <EvsHDD
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            volumeData={volumeData}
          />
        )

      case 'ess':
        return (
          <EvsESS
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            volumeData={volumeData}
          />
        )

      case 'oss':
        return (
          <EvsOSS
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            volumeData={volumeData}
          />
        )

      case 'egress':
        return (
          <Egress
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            networkData={networkData}
          />
        )

      case 'eip':
        return (
          <ElasticIP
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            networkData={networkData}
          />
        )

      case 'slb':
        return (
          <LoadBalancer
            {...props}
            {...commonProps}
            key={id}
            decreaseCount={decreaseCount}
            networkData={networkData}
          />
        )

      default:
        return <></>
    }
  }

  const RenderResources: Function = (props: any): JSX.Element[] => {
    return resourceData.resources.map(({type, ...data }) => {
      return componentMapping(type, { ...data })
    })
  }

  const finalCsvData: any[] = []
  finalCsvData.push(
    ...resourceData.resources,
    {},
    {
      quantity: 'Monthly',
      price: resourceData.resources?.reduce(
        (a: any, b: any) => parseFloat(a) + parseFloat(b?.price),
        0,
      ),
    },
    {
      quantity: 'Hourly',
      price: (
        resourceData.resources?.reduce(
          (a: any, b: any) => parseFloat(a) + parseFloat(b?.price),
          0,
        ) / 730
      )?.toFixed(3),
    },
  )
  const csvData: any = finalCsvData

  const csvHeaders: any = [
    { label: 'SKU', key: 'skuName' },
    { label: 'Operating System', key: 'os' },
    { label: 'Resource Type', key: 'resourceType' },
    { label: 'Unit Price', key: 'unitPrice' },
    { label: 'Quantity', key: 'quantity' },
    { label: 'Total Price', key: 'price' },
  ]

  return (
    <>
      <Header />
      <SubHeading />
      <Grid style={{ paddingBottom: '150px' }}>
        <CustomizedAccordions
          copyAndDeletebtn={false}
          name={'SELECT A PRODUCT'}
          component={
            <>
              <TabList
                increaseGPCount={increaseGPCount}
                increaseHP1Count={increaseHP1Count}
                increaseHP2Count={increaseHP2Count}
                increaseBMCount={increaseBMCount}
                increaseSsdCount={increaseSsdCount}
                increaseHddCount={increaseHddCount}
                increaseEssCount={increaseEssCount}
                increaseOssCount={increaseOssCount}
                increaseEgressCount={increaseEgressCount}
                increaseEipCount={increaseEipCount}
                increaseSlbCount={increaseSlbCount}
              />
            </>
          }
          enablePrice={false}
        />
        <Box>
          {/* <RenderResources /> */}
          {RenderResources()}
        </Box>
      </Grid>
      <Box>
        <Footer
          csvHeaders={csvHeaders}
          csvData={csvData}
          finalTotalPrice={resourceData?.resources?.reduce(
            (a, b) => a + b?.price,
            0,
          )}
        />
      </Box>
    </>
  )
}

export default MainPage
