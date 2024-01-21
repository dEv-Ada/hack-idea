import { json } from "react-router";
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
  const storedData= localStorage.getItem("ideas");
  if(storedData!==null && storedData.length>0){return JSON.parse(storedData);}
 else{localStorage.setItem("ideas",JSON.stringify(data)); return data;}
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
  const filter_data = allData.filter((el) => el.created_by === user);
  return filter_data;
};

export const addNewIdea = async (body) => {
  const allData = await fetchAllIdea();
  const new_id = allData[allData.length - 1].id + 1;
  const user = sessionStorage.getItem("user_id");
  const date = formatDate(new Date());
  allData.push({
    ...body,
    id: new_id,
    created_at: date,
    created_by: user,
    votes: 0,
    selfVote: [],
  });
  localStorage.setItem("ideas",JSON.stringify(allData));
};

export const editIdea = async (id, body) => {
  const allData = await fetchAllIdea();
  const index = allData.findIndex((el) => el.id === id);
  allData.splice(index, 1, body);
  localStorage.setItem("ideas",JSON.stringify(allData));
};

export const deleteIdea = async (id) => {
  const allData = await fetchAllIdea();
  const index = allData.findIndex((el) => el.id === id);
  allData.splice(index, 1);
  localStorage.setItem("ideas",JSON.stringify(allData));
};
