import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) =>
            loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueriesData(["user"], user);
            navigate('/dashboard', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err)
            toast.error("Invalid email or password");
        }
    });

    return { login, isLoading };
}