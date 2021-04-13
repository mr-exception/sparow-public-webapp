import React, { useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Wrapper from "ui-kit/Wrapper";
import { Card, CardBody } from "ui-kit/Card";
import Avatar from "ui-kit/Avatar/Avatar";
import { useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
import Styles from "./Main.module.scss";
import Profile from "api/profile/Profile";
import { FaEdit } from "react-icons/fa";
import Modal from "ui-kit/Modal/Modal";
import ModalHeader from "ui-kit/Modal/ModalHeader";
import ModalFooter from "ui-kit/Modal/ModalFooter";
import Button from "ui-kit/Button/Botton";
import ModalBody from "ui-kit/Modal/ModalBody";
import TextInput from "ui-kit/TextInput/TextInput";
import ImageInput from "ui-kit/ImageInput/ImageInput";
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
      <Modal
        size="medium"
        show={show_profile_edit}
        onClose={() => {
          set_show_profile_edit(false);
        }}
      >
        <ModalHeader
          close={() => {
            set_show_profile_edit(false);
          }}
        >
          Update Profile
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <TextInput label="first name" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <TextInput label="last name" />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <TextInput label="phone" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <TextInput type="email" label="email" />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <TextInput type="password" label="password" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <TextInput type="password" label="password confirmation" />
            </Col>
          </Row>
          <Row>
            <Col col={6}>
              <ImageInput value={profile.avatar} />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button size="small">save</Button>
          <Button
            onClick={() => {
              set_show_profile_edit(false);
            }}
            size="small"
          >
            cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Wrapper>
  );
};

export default Main;
