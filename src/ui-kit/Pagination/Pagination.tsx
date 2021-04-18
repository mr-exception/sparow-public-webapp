import React, { useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Styles from "./Pagination.module.scss";

const Pagination: React.FC<IPaginationProps> = ({
  pageChanged,
  page_count,
  current_page,
  loading,
}: IPaginationProps) => {
  const [last_action, set_last_action] = useState<
    "prev" | "next" | "first" | "last"
  >();

  const isPrevButtonDisabled = (): boolean => {
    if (current_page === 1) return true;
    return false;
  };
  const isFirstButtonDisabled = (): boolean => {
    if (current_page === 1) return true;
    if (page_count === 1) return true;
    return false;
  };
  const isNextButtonDisabled = (): boolean => {
    if (current_page === page_count) return true;
    return false;
  };
  const isLastButtonDisabled = (): boolean => {
    if (current_page === page_count) return true;
    if (page_count === 1) return true;
    return false;
  };
  return (
    <Row>
      <Col col={12} className={Styles.container}>
        <button
          className={Styles.button}
          disabled={isFirstButtonDisabled()}
          onClick={() => {
            pageChanged(1);
            set_last_action("first");
          }}
        >
          {loading && last_action === "first" ? "..." : "<<"}
        </button>
        <button
          className={Styles.button}
          disabled={isPrevButtonDisabled()}
          onClick={() => {
            pageChanged(current_page - 1);
            set_last_action("prev");
          }}
        >
          {loading && last_action === "prev" ? "..." : "<"}
        </button>
        <div className={Styles.pageNumber}>
          {current_page}/{page_count}
        </div>
        <button
          className={Styles.button}
          disabled={isNextButtonDisabled()}
          onClick={() => {
            pageChanged(current_page + 1);
            set_last_action("next");
          }}
        >
          {loading && last_action === "next" ? "..." : ">"}
        </button>
        <button
          className={Styles.button}
          disabled={isLastButtonDisabled()}
          onClick={() => {
            pageChanged(page_count);
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
