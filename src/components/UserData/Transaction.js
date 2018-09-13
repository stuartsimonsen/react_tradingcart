import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
import { map } from "lodash";

import VirtualItem from "./VirtualItem";

const Transaction = ({ row }) => {
  console.log(row);
  return (
    <div className="Exchange-wrapper">
      <Header row={row} />
      <Content row={row} />
    </div>
  );
};

const Header = ({ row }) => {
  return (
    <div className="Exchange-header">
      <div className="Exchange-header-row">
        <span className="Exchange-header-item">ID: {row.id}</span>
        <span className="Exchange-header-item">
          STATE: {row.reason ? row.reason : row.state}
        </span>
      </div>
    </div>
  );
};

const Content = ({ row }) => {
  return (
    <div className="Exchange-content">
      <div className="Exchange-value">
        ${row.amount.toFixed(2)}
      </div>
      <Icon className="Exchange-spacer" iconSize="32" icon="swap-horizontal" />
      <Icon className="Exchange-spacer" iconSize="32" icon="folder-close" />
      <div className="Exchange-items">
        {/* {map(row.withdraw.items, item => {
          return <VirtualItem item={item} />;
        })} */}
      </div>
    </div>
  );
};

export default Transaction;
