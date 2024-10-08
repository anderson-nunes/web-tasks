import fetchApi from "./customFetch";

export const getTasks = async () => {
  const response = await fetchApi("tasks", {
    method: "GET",
  });

  return response;
};

export const createTask = async (body: any) => {
  const response = await fetchApi("tasks", {
    body,
    method: "POST",
  });

  return response;
};

export const updateTask = async (id: number, body: any) => {
  const response = await fetchApi(`tasks/${id}`, {
    method: "PUT",
    body,
  });

  return response;
};

export const getTaskById = async (id: string) => {
  const response = await fetchApi(`tasks/${id}`, {
    method: "GET",
  });

  return response;
};

export const deleteTask = async (id: number) => {
  const response = await fetchApi(`tasks/${id}`, {
    method: "DELETE",
  });

  return response;
};
