import Context from "Context";
import React, { useContext } from "react";

const Component = () => {
  const context = useContext(Context);
  return <div>hello {context.user.user.username}</div>;
};

export default Component;
