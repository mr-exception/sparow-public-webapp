import React from "react";
import {
  ICardBodyProps,
  ICardFooterProps,
  ICardHeaderProps,
  ICardProps,
} from "./props.inteface";
import Styles from "./Card.module.scss";

export const Card: React.FC<ICardProps> = ({ children }: ICardProps) => {
  return <div className={Styles.card}>{children}</div>;
};
export const CardHeader: React.FC<ICardHeaderProps> = ({
  children,
}: ICardHeaderProps) => {
  return <div className={Styles.cardHeader}>{children}</div>;
};

export const CardBody: React.FC<ICardBodyProps> = ({
  children,
}: ICardBodyProps) => {
  return <div className={Styles.cardBody}>{children}</div>;
};

export const CardFooter: React.FC<ICardFooterProps> = ({
  children,
}: ICardFooterProps) => {
  return <div className={Styles.cardFooter}>{children}</div>;
};
