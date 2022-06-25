import { useState } from "react";
import albums from "./albums";
import Album from "./Album";
import DiskPlayer from "./DiskPlayer";

export default function Jukebox() {
  const [currentAlbum, setCurrentAlbum] = useState(albums[0]);
  const handleChange = (album) => {
    setCurrentAlbum(album);
  };
  return (
    <>
      <h1> Record Loaded: {currentAlbum.name} </h1>
      <DiskPlayer album={currentAlbum} />
      <h2>Select an Album</h2>
      {albums.map((album) => (
        <Album
          album={album}
          handleChange={handleChange}
          isLoaded={currentAlbum.id === album.id}
        />
      ))}
    </>
  );
}
