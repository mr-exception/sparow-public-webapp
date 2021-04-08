import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "ui-kit/Wrapper";
import Styles from "./BreadCrumb.module.scss";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";

interface IProps {
  location: { name: string; route: string }[];
}

const BreadCrumb: React.FC<IProps> = ({ location }: IProps) => {
  return (
    <Wrapper injectedClass={Styles.breadCrumbWrapper}>
      <Row
        align="center"
        verticalAlign="center"
        style={{ background: "white" }}
      >
        <Col lg={12} md={12} sm={12} xs={12}>
          <h5 className={Styles.breadCrumblabel}>
            {location
              .map<React.ReactNode>((step, index) => (
                <Link key={index} to={step.route}>
                  {step.name}
                </Link>
              ))
              .reduce((prev, cur) => [prev, " / ", cur])}
          </h5>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default BreadCrumb;
