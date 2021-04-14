import React, { useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Wrapper from "ui-kit/Wrapper";
import { Card, CardBody } from "ui-kit/Card";
import Avatar from "ui-kit/Avatar/Avatar";
import Styles from "./Main.module.scss";
import { FaEdit } from "react-icons/fa";
import UpdateProfileModal from "./Components/UploadProfileModal/UpdateProfileModal";
import Profile from "api/profile/Profile";
import { useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
const Main: React.FC = () => {
  const profile: Profile = useSelector(
    (state: ILoggedInState) => state.profile
  );

  const [show_profile_edit, set_show_profile_edit] = useState(false);

  return (
    <Wrapper>
      <Row align="center" verticalAlign="center">
        <Col lg={8} md={8} sm={8} xs={12}>
          <Card>
            <CardBody>
              <Row align="center">
                <Col lg={3} md={3} sm={6} xs={12}>
                  <Avatar
                    size="200px"
                    caption={profile.username}
                    round={true}
                    src={profile.avatar}
                  />
                </Col>
              </Row>
              <Row>
                <Col col={12} style={{ textAlign: "left", marginTop: "1rem" }}>
                  <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Col className={Styles.propsName} col={4}>
                      full name
                    </Col>
                    <Col col={7}>{profile.getfullName()}</Col>
                    <Col className={Styles.editCol} col={1}>
                      <FaEdit
                        size={20}
                        onClick={() => {
                          set_show_profile_edit(true);
                        }}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Col className={Styles.propsName} col={4}>
                      username
                    </Col>
                    <Col col={7}>{profile.getUsername()}</Col>
                    <Col className={Styles.editCol} col={1}>
                      <FaEdit size={20} />
                    </Col>
                  </Row>
                  <hr />
                  <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Col className={Styles.propsName} col={4}>
                      phone
                    </Col>
                    <Col col={7}>{profile.getPhone()}</Col>
                    <Col className={Styles.editCol} col={1}>
                      <FaEdit size={20} />
                    </Col>
                  </Row>
                  <hr />
                  <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Col className={Styles.propsName} col={4}>
                      email
                    </Col>
                    <Col col={7}>{profile.getEmail()}</Col>
                    <Col className={Styles.editCol} col={1}>
                      <FaEdit size={20} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <UpdateProfileModal
        show={show_profile_edit}
        close={() => {
          set_show_profile_edit(false);
        }}
      />
    </Wrapper>
  );
};

export default Main;
