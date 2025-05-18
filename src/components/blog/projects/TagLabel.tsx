import { Tag } from "@/types/global";
interface TagProps {
  tag: Tag | string;
}
export function TagLabel({ tag }: TagProps) {
  let color = "bg-gray-700";
  const textColor = "text-gray-200";
  switch (tag) {
    case Tag.FRONT:
      color = "bg-blue-700";
      break;
    case Tag.BACK:
      color = "bg-green-700";
      break;
    case Tag.DEVOPS:
      color = "bg-orange-700";
      break;
    default:
      color = "bg-gray-700";
  }
  return (
    <span
      className={
        "px-2 py-1 mr-2 text-sm rounded-full " + color + " " + textColor
      }
    >
      {tag}
    </span>
  );
}
