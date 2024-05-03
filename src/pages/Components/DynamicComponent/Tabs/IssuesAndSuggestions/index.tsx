import { Grid, Text, Textarea } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { useState } from "react";

function IssuesAndSuggestions() {
  const [form, setForm] = useState({ value: "", status: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
    return;
  };
  return (
    <Grid
      gap="s400"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      margin="s300 s0 s0 s0"
    >
      <Stack direction="column" gap="8px">
        <Text type="headline" size="small" children="Tell us your experience" />
        <Text
          type="body"
          size="large"
          appearance="gray"
          children="Use the text box if you have any suggestions or if you had problems with the documentation. We use feedback to improve the user experience."
        />
      </Stack>
      <Textarea
        id="suggestions"
        label="Additional comments"
        name="suggestions"
        placeholder="Write us your issues or suggestions..."
        maxLength={120}
        onChange={onChange}
        value={form.value}
      />
    </Grid>
  );
}

export { IssuesAndSuggestions };
