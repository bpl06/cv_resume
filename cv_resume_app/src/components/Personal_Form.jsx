import { useState } from "react";
import "../styles/form.css";
import { InputWithLabel } from "./Form";
import { updateItem, PERSONAL_KEY, getItem } from "../storage";
export function PersonalForm({ onChange, personal, setPersonal, isVisible }) {
  return (
    <>
      {isVisible.personal && (
        <div id="personal-form" className="form-wrapper">
          <h1 className="form-header">Personal Info</h1>
          <form action="post" className="form">
            <InputWithLabel
              htmlFor="name"
              desc="Name"
              placeholder={
                personal.name ? personal.name : getItem(PERSONAL_KEY, "name")
              }
              onChange={(event) =>
                onChange("name", event, PERSONAL_KEY, setPersonal)
              }
            />
            <InputWithLabel
              htmlFor="email"
              desc="Email"
              placeholder={
                personal.email ? personal.email : getItem(PERSONAL_KEY, "email")
              }
              onChange={(event) =>
                onChange("email", event, PERSONAL_KEY, setPersonal)
              }
            />
            <InputWithLabel
              htmlFor="phone"
              inputType="tel"
              desc="Phone"
              placeholder={
                personal.phone ? personal.phone : getItem(PERSONAL_KEY, "phone")
              }
              onChange={(event) =>
                onChange("phone", event, PERSONAL_KEY, setPersonal)
              }
            />
          </form>
        </div>
      )}
    </>
  );
}
