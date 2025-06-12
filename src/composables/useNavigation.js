import { useRouter } from "vue-router";

export function useNavigation() {
    const router = useRouter();
    const goTo = (path) => {
        router.push(path).catch(err => {
            // Handle navigation errors, such as when the user tries to navigate to the same route
            if (err.name !== 'NavigationDuplicated') {
                console.error("Navigation error:", err);
            }
        })
    }

    return {
        goTo
    };
}