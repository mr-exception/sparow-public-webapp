import React, { useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Styles from "./Pagination.module.scss";

const Pagination: React.FC<IPaginationProps> = ({
  pageChanged,
  total_page,
  current_page,
  loading,
}: IPaginationProps) => {
  const [last_action, set_last_action] = useState<
    "prev" | "next" | "first" | "last"
  >();
  return (
    <Row>
      <Col col={12} className={Styles.container}>
        <button
          className={Styles.button}
          onClick={() => {
            pageChanged(1);
            set_last_action("first");
          }}
        >
          {loading && last_action === "first" ? "..." : "<<"}
        </button>
        <button
          className={Styles.button}
          onClick={() => {
            pageChanged(current_page - 1);
            set_last_action("prev");
          }}
        >
          {loading && last_action === "prev" ? "..." : "<"}
        </button>
        <div className={Styles.pageNumber}>
          {current_page}/{total_page}
        </div>
        <button
          className={Styles.button}
          onClick={() => {
            pageChanged(current_page + 1);
            set_last_action("next");
          }}
        >
          {loading && last_action === "next" ? "..." : ">"}
        </button>
        <button
          className={Styles.button}
          onClick={() => {
            pageChanged(total_page);
            set_last_action("last");
          }}
        >
          {loading && last_action === "last" ? "..." : ">>"}
        </button>
      </Col>
    </Row>
  );
};

export default Pagination;
