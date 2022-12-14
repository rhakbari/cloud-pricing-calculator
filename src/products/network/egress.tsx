import React, { useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import Network from "./network";

const Egress = (props: any) => {
  const {
    networkData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    egressCount,
    add,
    itemType,
  } = props;

  let name = "Egress - Data";

  return (
    <div>
      <CustomizedAccordions
        name={`Egress (Data ${egressCount})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        copyBtnOnClick={(e: any) => {
          copy(id);
        }}
        addBtnOnClick={(e: any) => {
          add(itemType)
        }}
        enablePrice={true}
        delBtnOnClick={(e: any) => {
          decreaseCount(id)
      
        }}
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

// export default Egress;

export default React.memo(Egress)
