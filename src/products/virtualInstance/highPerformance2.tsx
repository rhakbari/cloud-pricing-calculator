import { Grid } from "@mui/material";
import React, { useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import VirtualInstance from "./index";

const HighPerformance2 = (props: any) => {
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
    hp2Count,
    add,
    itemType,
  } = props;

  let name = "High Performance - HP2";

  return (
    <Grid>
      <CustomizedAccordions
        name={`High Performance 2 (Instance ${hp2Count})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        enablePrice={true}
        delBtnOnClick={() => decreaseCount(id)}
        copyBtnOnClick={(e: any) => copy(id)}
        addBtnOnClick={(e: any) => {
          add(itemType)
        }}
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
  );
};

// export default HighPerformance2;
export default React.memo(HighPerformance2)
