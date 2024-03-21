import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const EditBBSDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer">
          編集
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>投稿編集</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
      </DialogContent>
    </Dialog>
  );
};

export default EditBBSDialog;
