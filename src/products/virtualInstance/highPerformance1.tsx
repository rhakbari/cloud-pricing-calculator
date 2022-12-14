import { Grid } from '@mui/material'
import React, { useState } from 'react'
import CustomizedAccordions from '../../components/accordian'
import VirtualInstance from './index'

const HighPerformance1 = (props: any) => {
  const {
    decreaseCount,
    ecsData,
    id,
    num,
    modifyData,
    copy,
    os,
    quantity,
    sku,
    price,
    hp1Count,
    add,
    itemType,
  } = props

  let name = 'High Performance - HP1'

  return (
    <Grid>
      <CustomizedAccordions
        name={`High Performance 1 (Instance ${hp1Count})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        enablePrice={true}
        copyBtnOnClick={(e: any) => copy(id)}
        addBtnOnClick={(e: any) => {
          add(itemType)
        }}
        delBtnOnClick={() => decreaseCount(id)}
        component={
          <>
            <VirtualInstance
              id={id}
              selectedSku={sku}
              os={os}
              price={price}
              selectedQuantity={quantity}
              name={name}
              modifyData={modifyData}
              ecsData={ecsData}
            />
          </>
        }
      />
    </Grid>
  )
}

// export default HighPerformance1
export default React.memo(HighPerformance1);

