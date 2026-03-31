export function hey(message: string): string {
  const trimmed = message.trim();
  if (trimmed === '') {
    return 'Fine. Be that way!';
  }
  const isQuestion = trimmed.endsWith('?');
  const hasLetters = /[a-zA-Z]/.test(trimmed);
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return 'Whoa, chill out!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  return 'Whatever.';
}
