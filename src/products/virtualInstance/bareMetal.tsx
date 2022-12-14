import { Grid } from "@mui/material";
import React, { useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import VirtualInstance from "./index";

const BareMetal = (props: any) => {
  const {
    decreaseCount,
    bareMetal,
    id,
    num,
    modifyData,
    copy,
    os,
    quantity,
    sku,
    price,
    bmCount,
    add,
    itemType,
  } = props;

  let name = "Bare Metal - BM";

  return (
    <Grid>
      <CustomizedAccordions
        name={`Bare Metal (Server ${bmCount})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        enablePrice={true}
        copyBtnOnClick={(e: any) => {
          copy(id);
        }}
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
              bareMetal={bareMetal}
            />
          </>
        }
      />
    </Grid>
  );
};

// export default BareMetal;
export default React.memo(BareMetal)
