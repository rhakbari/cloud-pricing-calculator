import React, { useEffect, useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import ElasticVolume from "./elasticVolume";

const OSS = (props: any) => {
  const {
    volumeData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    ossCount,
    add,
    itemType,
  } = props;

  let name = "Object Storage Service - OSS";
  return (
    <div>
      <CustomizedAccordions
        name={`Object Storage Service (Storage ${ossCount})`}
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
            {" "}
            <ElasticVolume
              name={name}
              id={id}
              volumeData={volumeData}
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

// export default OSS;
export default React.memo(OSS)
