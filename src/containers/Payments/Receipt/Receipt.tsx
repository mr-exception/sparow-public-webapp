import React, { useEffect, useState } from "react";
import DoneState from "./DoneState";
import FetchingState from "./FetchingState";
import FailedState from "./FailedState";
import CanceledState from "./CanceledState";
const Component: React.FC = () => {
  const [transaction_status, set_transaction_status] = useState<
    undefined | "fetching" | "failed" | "done" | "canceled"
  >();
  const checkTransaction = () => {
    setTimeout(() => {
      set_transaction_status("canceled");
    }, 1000);
  };
  useEffect(checkTransaction, []);
  if (transaction_status === undefined || transaction_status === "fetching") {
    return <FetchingState />;
  }
  if (transaction_status === "failed") {
    return <FailedState />;
  }
  if (transaction_status === "canceled") {
    return <CanceledState />;
  }
  if (transaction_status === "done") {
    return <DoneState />;
  }
  return <div>no data to render</div>;
};

export default Component;
