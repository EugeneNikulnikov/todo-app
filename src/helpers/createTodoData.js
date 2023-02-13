export function createTodoData(title, description, deadline) {
  return {
    id:
      Math.floor(Math.random() * 10000) +
      title.toLowerCase().replaceAll(" ", "_"),
    title,
    description,
    deadline,
  };
}
