import React, { useState } from "react";
import CustomizedAccordions from "../../components/accordian";
import ElasticVolume from "./elasticVolume";

const EvsHDD = (props: any) => {
  const {
    volumeData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    hddCount,
    add,
    itemType,
  } = props;

  let name = "Elastic Volume Service - HDD";

  return (
    <div>
      <CustomizedAccordions
        name={`Elastic Volume Service - HDD (Storage ${hddCount})`}
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

// export default EvsHDD;
export default React.memo(EvsHDD)
