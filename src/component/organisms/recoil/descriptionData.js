import { atom } from "recoil";
import { getData } from "../data/data";

export const Watch = atom({
  key: "watch",
  default: false,
});

export const ShowActivity = atom({
  key: "showActivity",
  default: false,
});

export const showDialog = atom({
  key: "showDialog",
  default: false,
});

export const uidOfListItem = atom({
  key: "uidOfListItem",
  default: localStorage.getItem('uidOfListItem'),
});

export const list = atom({
  key: "list",
  default: getData(),
});

export const atomListUid = atom({
  key: "atomListUid",
  default: localStorage.getItem('itemid'),
});

export const atomCardName = atom({
  key: 'atomCardName',
  default:localStorage.getItem('cardName'),
})
export const wallpaper = atom({
  key: 'wallpaper',
  default:'https://assets-global.website-files.com/63062129119620a44791a2eb/6377fbd135687767b141378d_630d1ddc6a1b2f032f9352d8_AnyConv.com__Scrum%2520v%2520Kanban-1.webp',
})



