/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Select } from "@inubekit/select";

const SelectController = (props: any) => {
  const { value, status = "pending", name } = props;
  const [form, setForm] = useState({ value, status, name });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.innerText;
    setForm({ value, status: "pending", name });
  };

  const onFocus = () => {
    if (!value) {
      setForm({ ...form, status: "pending" });
    }
  };

  return (
    <Select
      {...props}
      value={form.value}
      status={form.status}
      onChange={onChange}
      onFocus={onFocus}
      name={form.name}
    />
  );
};

export { SelectController };
