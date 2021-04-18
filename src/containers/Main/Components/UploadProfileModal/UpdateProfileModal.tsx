import React, { useEffect, useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Modal from "ui-kit/Modal/Modal";
import ModalHeader from "ui-kit/Modal/ModalHeader";
import ModalFooter from "ui-kit/Modal/ModalFooter";
import Button from "ui-kit/Button/Botton";
import ModalBody from "ui-kit/Modal/ModalBody";
import TextInput from "ui-kit/TextInput/TextInput";
import { IUpdateProfileModal } from "./interfaces";
import { ILoggedInState } from "types/storeActions";
import Profile from "api/profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import Sparow from "api/Sparow";
import { isEmptyString } from "utils";
import { setProfile } from "store/actions";
import { ApiValidationError } from "api/errors/api-validation";
import ImageInput from "ui-kit/ImageInput/ImageInput";
const UpdateProfileModal: React.FC<IUpdateProfileModal> = ({
  show,
  close,
}: IUpdateProfileModal) => {
  const dispatch = useDispatch();
  const profile: Profile = useSelector(
    (state: ILoggedInState) => state.profile
  );
  const sparow: Sparow = useSelector((state: ILoggedInState) => state.sparow);

  const [loading, set_loading] = useState(false);

  const [avatar_errors, set_avatar_errors] = useState<string[]>([]);
  const [avatar, set_avatar] = useState<File>();
  const [cropped_avatar, set_cropped_avatar] = useState<File>();

  const [first_name_errors, set_first_name_errors] = useState<string[]>([]);
  const [first_name, set_first_name] = useState(
    !isEmptyString(profile.first_name) ? profile.first_name : ""
  );
  const [last_name_errors, set_last_name_errors] = useState<string[]>([]);
  const [last_name, set_last_name] = useState(
    !isEmptyString(profile.last_name) ? profile.last_name : ""
  );
  const [username_errors, set_username_errors] = useState<string[]>([]);
  const [username, set_username] = useState(
    !isEmptyString(profile.username) ? profile.username : ""
  );
  const [email_errors, set_email_errors] = useState<string[]>([]);
  const [email, set_email] = useState(
    !isEmptyString(profile.email) ? profile.email : ""
  );
  const [phone_errors, set_phone_errors] = useState<string[]>([]);
  const [phone, set_phone] = useState(
    !isEmptyString(profile.phone) ? profile.phone : ""
  );
  const [password_errors, set_password_errors] = useState<string[]>([]);
  const [password, set_password] = useState("");

  const [password_confirmation, set_password_confirmation] = useState("");

  const hasError = (): boolean => {
    if (username_errors.length > 0) return true;
    if (first_name_errors.length > 0) return true;
    if (last_name_errors.length > 0) return true;
    if (email_errors.length > 0) return true;
    if (phone_errors.length > 0) return true;
    if (password_errors.length > 0) return true;
    if (avatar_errors.length > 0) return true;
    return false;
  };

  const submit = async () => {
    const data: IUpdateProfileParams = {};
    if (!isEmptyString(first_name)) data.first_name = first_name;
    if (!isEmptyString(last_name)) data.last_name = last_name;
    if (!isEmptyString(password)) data.password = password;
    if (!isEmptyString(username)) data.username = username;
    if (!isEmptyString(email)) data.email = email;
    if (!isEmptyString(phone)) data.phone = phone;
    if (cropped_avatar) data.avatar = cropped_avatar;

    try {
      set_loading(true);
      const submited_profile = await sparow.updateProfile(data);
      set_loading(false);

      dispatch(setProfile(submited_profile));
      localStorage.setItem(
        "user",
        JSON.stringify(submited_profile.jsonObject())
      );

      close();
    } catch (error) {
      if (error instanceof ApiValidationError) {
        const validationErrors = (error as ApiValidationError).errors;
        if (validationErrors.hasOwnProperty("username")) {
          set_username_errors(validationErrors.username);
        }
        if (validationErrors.hasOwnProperty("first_name")) {
          set_first_name_errors(validationErrors.first_name);
        }
        if (validationErrors.hasOwnProperty("last_name")) {
          set_last_name_errors(validationErrors.last_name);
        }
        if (validationErrors.hasOwnProperty("password")) {
          set_password_errors(validationErrors.password);
        }
        if (validationErrors.hasOwnProperty("email")) {
          set_email_errors(validationErrors.email);
        }
        if (validationErrors.hasOwnProperty("phone")) {
          set_phone_errors(validationErrors.phone);
        }
        if (validationErrors.hasOwnProperty("avatar")) {
          set_avatar_errors(validationErrors.avatar);
        }
      }
      set_loading(false);
    }
  };

  // error parsing
  useEffect(() => {
    set_avatar_errors([]);
    set_password_errors([]);
    set_username_errors([]);
    set_first_name_errors([]);
    set_last_name_errors([]);
    set_email_errors([]);
    set_phone_errors([]);

    if (password !== password_confirmation) {
      set_password_errors(["does not math the confirmation"]);
    } else {
    }
    if (isEmptyString(username)) {
      set_username_errors(["username can't be empty"]);
    } else {
    }
    if (isEmptyString(first_name)) {
      set_first_name_errors(["first name can't be empty"]);
    } else {
    }
    if (isEmptyString(last_name)) {
      set_last_name_errors(["last name can't be empty"]);
    } else {
    }
    if (isEmptyString(email)) {
      set_email_errors(["email can't be empty"]);
    } else {
    }
    if (isEmptyString(phone)) {
      set_phone_errors(["phone can't be empty"]);
    } else {
    }
    if (cropped_avatar) {
      if (cropped_avatar.size > 250000) {
        // more than 250kb
        set_avatar_errors(["avatar file must be less than 250kb"]);
      } else {
      }
    } else {
    }
  }, [
    username,
    password,
    password_confirmation,
    email,
    phone,
    first_name,
    last_name,
    avatar,
    cropped_avatar,
  ]);

  return (
    <Modal size="medium" show={show} onClose={close}>
      <ModalHeader close={close}>Update Profile</ModalHeader>
      <ModalBody>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={first_name}
              onChange={set_first_name}
              errors={first_name_errors}
              label="first name"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={last_name}
              onChange={set_last_name}
              errors={last_name_errors}
              label="last name"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={phone}
              onChange={set_phone}
              errors={phone_errors}
              label="phone"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={email}
              onChange={set_email}
              errors={email_errors}
              type="email"
              label="email"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={password}
              onChange={set_password}
              errors={password_errors}
              type="password"
              label="password"
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={password_confirmation}
              onChange={set_password_confirmation}
              type="password"
              label="password confirmation"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ImageInput
              onChange={(file: File) => set_avatar(file)}
              label="upload avatar"
              errors={avatar_errors}
              value={avatar ? avatar : profile.avatar}
              crop={1}
              onCroped={(file: File) => {
                set_cropped_avatar(file);
              }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextInput
              value={username}
              onChange={set_username}
              errors={username_errors}
              label="username"
            />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          size="small"
          onClick={submit}
          loading={loading}
          disabled={hasError()}
        >
          save
        </Button>
        <Button onClick={close} size="small">
          cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateProfileModal;
