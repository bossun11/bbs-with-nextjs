import { BBSData } from "@/app/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface BBSCardProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSCardProps) => {
  const { id, title, content, created_at } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>ユーザー名</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">
          Learn more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
