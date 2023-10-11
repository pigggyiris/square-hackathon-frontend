import React from "react";
import avatar from "assets/img/avatars/avatar4.png";

const UserAvatar = () => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={avatar} alt="User Avatar" className="h-10 w-10" />
    </div>
  );
};

export default UserAvatar;
