import IconAtLimit from "@/components/icons/IconAtLimit.vue";
import IconOnTrack from "@/components/icons/IconOnTrack.vue";
import IconOverBudget from "@/components/icons/IconOverBudget.vue";

export function getStatusClass(status) {
    switch (status) {
        case "Over Budget":
            return "bg-red-100 text-red-600";
        case "At Limit":
            return "bg-yellow-100 text-yellow-600";
        case "On Track":
            return "bg-green-100 text-green-600";
        default:
            return "bg-gray-100 text-gray-600";
    }
}

export function getStatusIcon(status) {
    switch (status) {
        case "Over Budget":
            return IconOverBudget;
        case "At Limit":
            return IconAtLimit;
        case "On Track":
            return IconOnTrack;
        default:
            return IconOnTrack;
    }
}