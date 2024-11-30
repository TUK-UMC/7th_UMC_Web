import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../apis/todoAPI";

export const usePostTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => postTodo(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
