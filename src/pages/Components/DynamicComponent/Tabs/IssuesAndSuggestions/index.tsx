/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@inubekit/grid";
import { Button } from "@inubekit/button";
import { Text } from "@inubekit/text";
import { Textarea } from "@inubekit/textarea";
import { Stack } from "@inubekit/stack";
import { useState } from "react";
import { createGithubIssue } from "@pages/services/createGithubIssue";
import { StyledTextareaContainer } from "./styles";

function IssuesAndSuggestions() {
  const [form, setForm] = useState({ value: "", status: "" });

  const onChange = (e: { target: { value: any } }) => {
    setForm({ value: e.target.value, status: "pending" });
  };

  const handleSubmit = async () => {
    const result = await createGithubIssue("User Feedback", form.value);
    if (result.success) {
      setForm({ value: "", status: "success" });
    } else {
      setForm({ ...form, status: "error" });
    }
  };

  return (
    <Grid
      gap="32px"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      width="800px"
    >
      <Stack direction="column" gap="8px">
        <Text type="title" size="medium" children="Tell us your experience" />
        <Text
          size="medium"
          appearance="gray"
          children="Use the text box if you have any suggestions or if you had problems with the documentation. We use feedback to improve the user experience."
        />
      </Stack>
      <StyledTextareaContainer>
        <Textarea
          id="suggestions"
          label="Additional comments"
          name="suggestions"
          placeholder="Write us your issues or suggestions..."
          maxLength={120}
          onChange={onChange}
          value={form.value}
          fullwidth
        />
      </StyledTextareaContainer>

      <Button onClick={handleSubmit}>Submit</Button>
    </Grid>
  );
}

export { IssuesAndSuggestions };
