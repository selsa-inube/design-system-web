/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@inubekit/grid";
import { Button } from "@inubekit/button";
import { Text } from "@inubekit/text";
import { Textarea } from "@inubekit/textarea";
import { Stack } from "@inubekit/stack";
import { useState } from "react";
import { createGithubIssue } from "@pages/services/createGithubIssue";
import { StyledTextareaContainer } from "./styles";
import { Textfield } from "@inubekit/input";
import { useFlag } from "@inubekit/flag";

function IssuesAndSuggestions() {
  const [form, setForm] = useState({ title: "", value: "", status: "" });
  const { addFlag } = useFlag();

  const onChange = (e: { target: { name: string; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value, status: "pending" });
  };

  const handleSubmit = async () => {
    const result = await createGithubIssue(form.title, form.value);
    if (result.success) {
      setForm({ title: "", value: "", status: "success" });
      addFlag({
        title: "Issue submitted successfully",
        description:
          "Your issue has been submitted and will be reviewed shortly.",
        appearance: "success",
        duration: 5000,
      });
    } else {
      setForm({ ...form, status: "error" });
      addFlag({
        title: "Submission failed",
        description:
          "There was an issue submitting your request. Please try again.",
        appearance: "danger",
        duration: 5000,
      });
    }
  };

  const isFormValid = form.title.trim() !== "" && form.value.trim() !== "";

  return (
    <Grid
      gap="32px"
      autoRows="unset"
      alignContent="unset"
      justifyContent="unset"
      width="800px"
      margin="-16px 0 0 0"
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
        <Stack direction="column" gap="16px">
          <Textfield
            id="suggestions-title"
            label="Issue title"
            name="title"
            placeholder="Please type a title for your issue"
            required
            onChange={onChange}
            value={form.title}
          />
          <Textarea
            id="suggestions"
            label="Additional comments"
            name="value"
            placeholder="Write us your issues or suggestions..."
            maxLength={120}
            onChange={onChange}
            value={form.value}
            fullwidth
            required
          />
        </Stack>
      </StyledTextareaContainer>
      <Stack justifyContent="flex-end" margin="-8px 0 0 0">
        <Button onClick={handleSubmit} disabled={!isFormValid}>
          Submit
        </Button>
      </Stack>
    </Grid>
  );
}

export { IssuesAndSuggestions };
