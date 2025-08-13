import dashboardImage from "../assets/icons/dashboard-img.png"
import managementImage from "../assets/icons/managment-img.png"
import journal from "../assets/icons/journal-img.png";
import transaction from "../assets/icons/transaction-img.png";
import report from "../assets/icons/report-img.png"

// side bar data
export const sideBarData = [
  {
    title: "Dashboard",
    icon: dashboardImage,
    link: "/dashboard"
  },
  {
    title: "Management",
    icon: managementImage,
    links: [
      {
        title: "Users",
        link: "/users"
      },
      {
        title: "Documents",
        link: "/documents"
      },
      {
        title: "Assets",
        link: "/assets"
      },
      {
        title: "Projects",
        link: "/projects"
      },
      {
        title: "Employees",
        link: "/employees"
      },
      {
        title: "Finance",
        link: "/finance"
      },
      {
        title: "Farm Projects",
        link: "/farm-projects"
      },
      {
        title: "Car wash",
        link: "/car-wash"
      },
      {
        title: "Partners",
        link: "/partners"
      },
      {
        title: "Dirt Carriers",
        link: "/dirt-carriers"
      },
    ]
  },
  {
    title: "Personal Journal",
    icon: journal,
    link: "/journals"
  },
  {
    title: "Transactions",
    icon: transaction,
    link: "/transactions"
  },
  {
    title: "Reports",
    icon: report,
    link: "/reports"
  },
   {
    title: "Settings",
    icon: report,
    link: "/settings"
  }
];