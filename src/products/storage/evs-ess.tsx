import React from "react";
import CustomizedAccordions from "../../components/accordian";
import ElasticVolume from "./elasticVolume";

const ESS = (props: any) => {
  const {
    volumeData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    essCount,
    add,
    itemType,
  } = props;

  let name = "Elastic Volume Service - ESS";

  return (
    <div>
      <CustomizedAccordions
        name={`Enterprise Storage Service (Storage ${essCount})`}
        price={`$ ${price?.toFixed(3)}`}
        copyAndDeletebtn={true}
        copyBtnOnClick={(e: any) => {
          copy(id);
        }}
        addBtnOnClick={(e: any) => {
          add(itemType)
        }}
        enablePrice={true}
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

// export default ESS;

export default React.memo(ESS)
