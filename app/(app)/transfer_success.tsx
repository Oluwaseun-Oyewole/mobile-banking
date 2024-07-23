import MainWrapper from "@/components/main/wrapper";
import CustomSuccess from "@/components/success";
import { Routes } from "@/routes/routes";
import React from "react";

const TransferSuccess = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <CustomSuccess
        imagePath={require("@/assets/images/success.svg")}
        title="Transfer successful"
        description="You have successfully transferred $1000 to Momoh Yussuf"
        buttonText="Confirm"
        redirectRoute={Routes.Home}
      />
    </MainWrapper>
  );
};

export default TransferSuccess;
