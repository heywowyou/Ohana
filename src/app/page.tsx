import Image from "next/image";

const photos = [
  { id: 1, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 2, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 3, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 4, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 5, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 6, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 7, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 8, src: "/pictures/image-placeholder-01.png", alt: "" },
  { id: 9, src: "/pictures/image-placeholder-01.png", alt: "" },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt || `Portfolio image ${photo.id}`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" // Helps Next.js optimize image loading
              className="object-cover"
              priority={photo.id <= 4} // Prioritize loading for the first few images
            />
          </div>
        ))}
      </div>
    </>
  );
}
