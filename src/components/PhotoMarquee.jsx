import { orlandoPhotos } from '../photos';

// Doubled so the CSS marquee loop is seamless.
const track = [...orlandoPhotos, ...orlandoPhotos];

export default function PhotoMarquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {track.map((photo, i) => (
          <img className="marquee__photo" src={photo.src} alt={photo.alt} key={`${photo.src}-${i}`} loading="lazy" />
        ))}
      </div>
    </div>
  );
}
