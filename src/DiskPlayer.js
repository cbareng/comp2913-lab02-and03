import "./Radio.css";

export default function DiskPlayer({ album }) {
  const { name, coverImg, tracks } = album;
  let x = 0;
  return (
    <div>
      <img className="Radio" src={coverImg} alt={name} />
      {tracks.map((track) => (
        <p>
          {++x}. {track}
        </p>
      ))}
    </div>
  );
}
