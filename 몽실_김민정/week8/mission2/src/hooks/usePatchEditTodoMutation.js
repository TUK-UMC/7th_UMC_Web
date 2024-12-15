import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchEditTodo } from "../apis/todoAPI";

export const usePatchEditTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => patchEditTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
