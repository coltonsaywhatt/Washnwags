type SageBlobProps = {
  className?: string;
};

export function SageBlob({ className = "" }: SageBlobProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M331.7 63.8c54.5 41.5 76 115.9 55.5 181.6-20.4 65.7-82.8 122.6-152.8 135.8-70.1 13.3-147.9-17-180-73.5-32.1-56.4-18.6-139.1 22.7-196.3C118.4 54.2 187.6 22.6 237 24.2c49.4 1.7 40.1-1.9 94.7 39.6Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M296.2 121.5c31.7 28.6 37.5 75.5 21.3 112.4-16.2 36.9-54.5 63.7-96.5 68.5-42 4.9-87.8-12.1-107.7-44.9-19.8-32.7-13.7-81.1 12.5-113.3 26.2-32.1 72.5-47.9 107.8-47.9 35.4 0 30.9-3.4 62.6 25.2Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.42"
      />
    </svg>
  );
}
