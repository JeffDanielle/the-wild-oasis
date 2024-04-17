import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient()
    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        // This is how to import function with the useMutation hook * Don't forget to import it + useQueryClient for invalidation *
        mutationFn: deleteBookingApi,
        // Upon successful mutation
        onSuccess: () => {
            toast.success('Booking successfully deleted')
            // invalidateQueries refetch data which will render instantly in the component
            queryClient.invalidateQueries({
                queryKey: ['bookings']
            });
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { isDeleting, deleteBooking };
}

