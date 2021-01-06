import React from "react";
import { Card, CardBody } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Styles from "./Receipt.module.scss";
import Lottie from "react-lottie";
import Loading from "lottie/wifi-connecting.json";
const FetchingState: React.FC = () => {
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={4} md={6} sm={8} xs={12}>
        <Space height={150} />
        <Card>
          <CardBody>
            <Row align="center">
              <Col col={12}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: Loading,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={300}
                  width={300}
                  isStopped={false}
                  isPaused={false}
                />
              </Col>
              <Col col={12} className={Styles.fetchingTitle}>
                please wait
              </Col>
              <Col col={12} className={Styles.fetchingCaption}>
                verifing transaction information...
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Space height={30} />
    </Row>
  );
};

export default FetchingState;
