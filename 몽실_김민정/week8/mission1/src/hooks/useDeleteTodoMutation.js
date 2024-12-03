import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../apis/todoAPI";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
