import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomizedAccordions from '../../components/accordian'
import VirtualInstance from './index'

const GeneralPurpose = (props: any) => {
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
    gpCount,
    add,
    itemType,
  } = props

  let name = 'General Purpose - GP'

  return (
    <Grid>
      <CustomizedAccordions
        name={`General Purpose (Instance ${gpCount})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        addBtnOnClick={(e: any) => {
          add(itemType)
        }}
        copyBtnOnClick={(e: any) => {
          copy(id)
        }}
        enablePrice={true}
        delBtnOnClick={(e: any) => decreaseCount(id)}
        component={
          <>
            {' '}
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

export default React.memo(GeneralPurpose)
