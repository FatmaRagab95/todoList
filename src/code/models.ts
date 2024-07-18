export interface iTask {
  id: number;
  title: string;
  description: string;
  status: "todo" | "inprogress" | "done";
}
