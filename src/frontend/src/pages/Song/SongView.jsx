import ZoroWallpaper from "../../assets/gif/zoro-monochrome-one-piece-moewalls-com.mp4";

const SongView = () => {
  return (
    <div
      className="h-full w-full  bg-fit bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${ZoroWallpaper})` }}
    ></div>
  );
};

export default SongView;
