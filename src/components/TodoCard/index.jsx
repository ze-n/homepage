import React from "react";
import { ReactComponent as Done } from "../../assets/icons/Done.svg";
import { ReactComponent as Delete } from "../../assets/icons/Delete.svg";
import Avatar from "../../assets/images/Avatar.png";
import "./styles.css";
export default function TodoCard() {
  return (
    <div className="todocard">
      <header className="todocard__header">
        <img
          src={Avatar}
          alt="user display picture"
          className="todocard__user-dp"
        />
        <span className="todocard__user-name title">Shoyo</span>
      </header>
      <div className="todocard__add-item">
        <input type="text" id="todocard__input" />
        <label htmlFor="todocard__input">
          <Done />
        </label>
      </div>
      <ul className="todocard__list" role="list">
        <li className="todocard__list-items">
          <label htmlFor="item1">But fruites</label>
          <span>
            <input type="checkbox" name="item1" id="item1" />
            <Delete />
          </span>
        </li>
      </ul>
    </div>
  );
}
