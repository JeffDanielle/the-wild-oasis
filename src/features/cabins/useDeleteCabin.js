import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {

    const queryClient = useQueryClient()
    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        // This is how to import function with the useMutation hook * Don't forget to import it + useQueryClient for invalidation *
        mutationFn: deleteCabinApi,
        // Upon successful mutation
        onSuccess: () => {
            toast.success('Cabin successfully deleted')
            // invalidateQueries refetch data which will render instantly in the component
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            });
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { isDeleting, deleteCabin };
}

