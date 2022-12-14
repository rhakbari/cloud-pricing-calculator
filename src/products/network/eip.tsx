import React, { useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import Network from "./network";

const ElasticIP = (props: any) => {
  const {
    networkData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    eipCount,
    add,
    itemType,
  } = props;

  let name = "Elastic IP - EIP";
  return (
    <div>
      <CustomizedAccordions
        name={`Elastic IP (EIP  ${eipCount})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        enablePrice={true}
        copyBtnOnClick={(e: any) => {
          copy(id);
        }}
        addBtnOnClick={(e: any) => {
          add(itemType)
        }}
        delBtnOnClick={(e: any) => decreaseCount(id)}
        component={
          <>
           <Network
              networkData={networkData}
              name={name}
              id={id}
              volumeData={networkData}
              modifyData={modifyData}
              quantity={quantity}
              sku={sku}
            />
          </>
        }
      />
    </div>
  );
};

// export default ElasticIP;
export default React.memo(ElasticIP)
