const MAX_NAME_LENGTH = 30;

export function getNameValidate() {
  const validateName = (name: string) => {
    const trimmed = name.trim();

    if (!trimmed) return 'Name is required';
    if (trimmed.length > MAX_NAME_LENGTH) {
      return `Name must be ≤ ${MAX_NAME_LENGTH} characters`;
    }

    return null;
  };

  return { validateName };
}
