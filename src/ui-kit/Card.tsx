import React from "react";
import {
  ICardBodyProps,
  ICardFooterProps,
  ICardHeaderProps,
  ICardProps,
} from "./props.inteface";
import Styles from "./Card.module.scss";

const Card = ({ children }: ICardProps) => {
  return <div className={Styles.card}>{children}</div>;
};
const Header = ({ children }: ICardHeaderProps) => {
  return <div className={Styles.cardHeader}>{children}</div>;
};
Card.Header = Header;
const Body = ({ children }: ICardBodyProps) => {
  return <div className={Styles.cardBody}>{children}</div>;
};
Card.Body = Body;
const Footer = ({ children }: ICardFooterProps) => {
  return <div className={Styles.cardFooter}>{children}</div>;
};
Card.Footer = Footer;
export default Card;
