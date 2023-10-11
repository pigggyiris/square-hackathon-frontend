import logoImage from "assets/img/layout/logoImage.png";

const BotAvatar = () => {
  return (
    <div className="bg-fall-100 rounded-full w-10 h-10 flex items-center justify-center">
      <img src={logoImage} alt="Bot Avatar" className="h-10 w-10" />
    </div>
  );
};

export default BotAvatar;
