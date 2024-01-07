import { formatDate } from "../utils/commonFunctions";
import { data } from "../utils/data";

export const fetchTag = async () => {
  const data = [
    {
      id: 1,
      tag: "Technology",
    },
    {
      id: 2,
      tag: "Automation",
    },
    {
      id: 3,
      tag: "Finance",
    },
    {
      id: 4,
      tag: "Education",
    },
    {
      id: 5,
      tag: "Healthcare",
    },
  ];

  return data;
};

export const fetchAllIdea = async () => {
  return data;
};

export const fetchIdeaById = async (id) => {
  const allData = await fetchAllIdea();
  const data = allData.filter((el) => el.id === id);
  return data;
};

export const fetchIdeaByTag = async (tag) => {
  const allData = await fetchAllIdea();
  const data = allData.filter((el) => el.tag === tag);
  return data;
};

export const fetchMyIdea = async () => {
  const user = sessionStorage.getItem("user_id");
  const allData = await fetchAllIdea();
  const data = allData.filter((el) => el.created_by === user);
  return data;
};

export const addNewIdea = async (body) => {
  const new_id = data[data.length - 1].id + 1;
  const user = sessionStorage.getItem("user_id");
  const date = formatDate(new Date());
  data.push({
    ...body,
    id: new_id,
    created_at: date,
    created_by: user,
    votes: 0,
    selfVote: false,
  });
};

export const editIdea = async (id, body) => {
  const index = data.findIndex((el) => el.id === id);
  data.splice(index, 1, body);
};

export const deleteIdea = async (id) => {
  const index = data.findIndex((el) => el.id === id);
  data.splice(index, 1);
};
