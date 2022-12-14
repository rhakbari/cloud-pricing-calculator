import React, { useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import Network from "./network";

const LoadBalancer = (props: any) => {
  const {
    networkData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    slbCount,
    add,
    itemType,
  } = props;

  let name = "Smart Load Balancer - LB";

  return (
    <div>
      <CustomizedAccordions
        name={`Smart Load Balancer (LB  ${slbCount})`}
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

// export default LoadBalancer;
export default React.memo(LoadBalancer)
