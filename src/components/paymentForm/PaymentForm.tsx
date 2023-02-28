// import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
// import images from "react-payment-inputs/images";
import { Card, Input } from "antd";
import styles from "./PaymentForm.module.css";

export const PaymentForm = () => {
  // const {
  //   wrapperProps,
  //   getCardImageProps,
  //   getCardNumberProps,
  //   getExpiryDateProps,
  //   getCVCProps,
  // } = usePaymentInputs();

  return (
    <Card
      title="信用卡"
      bordered={false}
      className={styles["payment-credit-card"]}
    >
      {/* <PaymentInputsWrapper {...wrapperProps}>
        <svg {...getCardImageProps({ images })} />
        <input {...getCardNumberProps()} />
        <input {...getExpiryDateProps()} />
        <input {...getCVCProps()} />
      </PaymentInputsWrapper> */}
      <Input placeholder="请输入信用卡卡号"></Input>
    </Card>
  );
};