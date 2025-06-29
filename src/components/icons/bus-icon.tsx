export default function BusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 448 512"
      height="200px"
      width="200px"
      {...props}
    >
      <path
        d="M224 0c124.8 0 224 35.2 224 80v336c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32V80C0 35.2 99.2 0 224 0zM64 128v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm16 272a32 32 0 100-64 32 32 0 100 64zm288 0a32 32 0 100-64 32 32 0 100 64z"
        stroke="none"
      />
    </svg>
  );
}
