import MainWrapper from "@/components/main/wrapper";
import CustomSuccess from "@/components/success";
import { Routes } from "@/routes/routes";
import React from "react";

const WithdrawalSuccess = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <CustomSuccess
        imagePath={require("@/assets/images/mobile_prepaid.svg")}
        title="Payment success"
        description="You have successfully paid mobile prepaid!"
        buttonText="Confirm"
        redirectRoute={Routes.Home}
      />
    </MainWrapper>
  );
};

export default WithdrawalSuccess;
