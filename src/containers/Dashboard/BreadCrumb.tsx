import React from "react";
import {Link} from 'react-router-dom';
import Wrapper from 'ui-kit/Wrapper'
import Styles from './BreadCrumb.module.scss'
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";

interface IProps {
  url: string;
  label:string;
}

const BreadCrumb:React.FC<IProps> = ({url,label}:IProps) => {

  return (
    <Wrapper injectedClass={Styles.breadCrumbWrapper}>
      <Row align="center" verticalAlign="center" style={{'background':"white"}}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <h5 className={Styles.breadCrumblabel}>
            <Link to={url}>{label}</Link>
            {" / "}
            <Link to={url}>profile</Link>
          </h5>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default BreadCrumb;