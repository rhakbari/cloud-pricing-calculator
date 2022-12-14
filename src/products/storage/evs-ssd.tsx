import React from "react";
import CustomizedAccordions from "../../components/accordian";
import ElasticVolume from "./elasticVolume";

const EvsSSD = (props: any) => {
  const {
    volumeData,
    decreaseCount,
    id,
    modifyData,
    copy,
    quantity,
    sku,
    price,
    ssdCount,
    add,
    itemType,
  } = props;

  let name = "Elastic Volume Service - SSD";

  return (
    <div>
      <CustomizedAccordions
        name={`Elastic Volume Service - SSD (Storage ${ssdCount})`}
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

// export default EvsSSD;
export default React.memo(EvsSSD)
