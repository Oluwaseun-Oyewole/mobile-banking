import React, { PropsWithChildren, forwardRef } from "react";
import { Modalize } from "react-native-modalize";

type ModalProps = PropsWithChildren & {};
const Modal = forwardRef<HTMLInputElement, ModalProps>(({ children }, ref) => {
  return <Modalize ref={ref}>{children}</Modalize>;
});

export default Modal;
