import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw
} from "components/icons";
import { logout } from "modules/auth/userSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


const DashboardSidebar = () => {
  const dispatch=useDispatch();
  const sidebarLinks = [
    {
      icon: <IconDashboard></IconDashboard>,
      title: "Dashboard",
      url: "/home",
    },
    {
      icon: <IconCampaign></IconCampaign>,
      title: "Campaign",
      url: "/campaign",
    },
    {
      icon: <IconPayment></IconPayment>,
      title: "Payment",
      url: "/payment",
    },
    {
      icon: <IconWithdraw></IconWithdraw>,
      title: "Withdraw",
      url: "/withdraw",
    },
    {
      icon: <IconProfile></IconProfile>,
      title: "Profile",
      url: "/profile",
    },
    {
      icon: <IconLogout></IconLogout>,
      title: "Logout",
      url: "/sign-in",
      onClick: () => {},
    },
    {
      icon: <IconLight></IconLight>,
      title: "Light",
      url: "/light",
      onClick: () => {dispatch(logout)},
    },
  ];

  const navLinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:shadow-sdprimary";

  return (
    <div className=" px-[14px] py-10 w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,213,213,0.3)] flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          onClick={link.onClick}
          className={({ isActive }) =>
            isActive ? `bg-primary text-primary bg-opacity-20 ${navLinkClass}`  : `${navLinkClass} text-icon-color`
          }
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
