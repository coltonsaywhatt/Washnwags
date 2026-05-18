import { Star } from "lucide-react";

export function StarRating() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-1 text-sage-dark">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          aria-hidden="true"
          className="h-4 w-4 fill-current"
          key={index}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
