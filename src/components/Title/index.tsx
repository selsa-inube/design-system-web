import { Text } from "@inube/design-system";

interface ITitle {
  title: string;
}

function capitalizeWord(word: string) {
  let firstLetter = word[0];
  firstLetter = firstLetter.toUpperCase();
  return `${firstLetter}${word.slice(1, word.length)}`;
}

function format(text: string) {
  const initialWords = text.split("-");
  const transformedWords = initialWords.map(capitalizeWord);
  return transformedWords.join(" ");
}

function Title(props: ITitle) {
  const { title } = props;
  return <Text type="headline">{format(title)}</Text>;
}

export { Title };
