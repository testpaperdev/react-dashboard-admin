import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const userProfile = [
  {
    id: 28,
    photo: personsImgs.person_one,
    name: "Muhammad Aiman",
    firstname: "Muhammad",
    lastname: "Aiman",

    email: "aiman123@gmail.com",
  },
];

export const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: iconsImgs.home,
    cName: "nav-text",
  },
  {
    id: 2,
    title: "Sales",
    path: "/sales",
    icon: iconsImgs.bills,
    cName: "nav-text",
  },
  {
    id: 3,
    title: "Commissions",
    path: "/commissions",
    icon: iconsImgs.wealth,
    cName: "nav-text",
  },
  {
    id: 4,
    title: "Customers",
    path: "/customers",
    icon: iconsImgs.user,
    cName: "nav-text",
  },
  {
    id: 5,
    title: "Package List",
    path: "/packagelist",
    icon: iconsImgs.budget,
    cName: "nav-text",
  },
];

export const navigationLinks = [
  { id: 1, title: "Dashboard", path: "/dashboard", image: iconsImgs.home },
  { id: 2, title: "Sales", path: "/sales", image: iconsImgs.budget },
  { id: 3, title: "Commissions", path: "/commissions", image: iconsImgs.plane },
  { id: 4, title: "Customers", path: "/customers", image: iconsImgs.wallet },
  {
    id: 5,
    title: "Package List",
    path: "/packagelist",
    image: iconsImgs.bills,
  },
];

export const data = [
  { id: 1, date: "2024-04-15", totalModules: 10 },
  { id: 2, date: "2024-04-16", totalModules: 7 },
  { id: 3, date: "2024-04-17", totalModules: 5 },
  { id: 4, date: "2024-06-01", totalModules: 4 },
  { id: 5, date: "2024-10-13", totalModules: 1 },
];

export const pieCharts = [
  { name: "Facebook", value: 20000 },
  { name: "Instagram", value: 120000 },
  { name: "Twitter", value: 15000 },
  { name: "Telegram", value: 10000 },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const linechart_data = [
  {
    month: "January",
    savings: 5000,
    loss: 500,
  },
  {
    month: "February",
    savings: 8000,
    loss: 300,
  },
  {
    month: "March",
    savings: 3000,
    loss: 800,
  },
  {
    month: "April",
    savings: 6000,
    loss: 100,
  },
  {
    month: "May",
    savings: 4000,
    loss: 700,
  },
  {
    month: "June",
    savings: 9000,
    loss: 1200,
  },
];
