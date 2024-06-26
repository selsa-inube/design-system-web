/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Textarea } from "@inubekit/textarea";

const TextareaController = (props: any) => {
  const { value = "", status = "pending", maxLength = 0 } = props;
  const [form, setForm] = useState({ value, status });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
    return;
  };

  const onFocus = () => {
    if (form.status === "invalid") {
      return setForm({ ...form, status: "invalid" });
    }
    setForm({ ...form, status: "pending" });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      setForm({ ...form, status: "invalid" });
    } else setForm({ ...form, status: "pending" });
  };
  const message = "The number the characters is too long";
  return (
    <Textarea
      {...props}
      value={form.value}
      status={form.status}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      message={message}
    />
  );
};

export { TextareaController };
