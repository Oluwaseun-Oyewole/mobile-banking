import MainWrapper from "@/components/main/wrapper";
import CustomSuccess from "@/components/success";
import { Routes } from "@/routes/routes";
import React from "react";

const WithdrawalSuccess = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <CustomSuccess
        imagePath={require("@/assets/images/success.svg")}
        title="Successful withdrawal"
        description="You have successfully withdrawn money!"
        buttonText="Confirm"
        redirectRoute={Routes.Home}
      />
    </MainWrapper>
  );
};

export default WithdrawalSuccess;
