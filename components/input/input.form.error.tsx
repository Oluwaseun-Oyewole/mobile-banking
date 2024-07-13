import { CustomText } from "../text";

type IFormErrorProps = {
  error?: string;
};

const FormError = ({ error }: IFormErrorProps) => {
  return (
    <CustomText
      className="text-red-500 mt-[5px] flex items-center text-xs pl-2 leading-4"
      fontFamily="PoppinsMedium"
    >
      {error}
    </CustomText>
  );
};

export default FormError;
