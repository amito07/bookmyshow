import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../modules/Users";

export const userDetails = () =>
  useQuery({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
  });
