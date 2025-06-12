<script setup>
import { db } from "@/collection/firebase";
import { getAuth } from "firebase/auth";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { ref } from "vue";

const auth = getAuth();
const userId = auth.currentUser ? auth.currentUser.uid : null;
const categories = ref([]);
const loading = ref(false);

const categoriesQuery = query(
  collection(db, "categories"),
  where("userId", "==", userId)
);

const form = ref({
  category: "",
  amount: null,
  timePeriod: "monthly",
});

if (userId) {
  // Fetch categories from the "categories" collection
  onSnapshot(categoriesQuery, (snapshot) => {
    categories.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  });
}

const submitForm = async () => {
  loading.value = true;

  try {
    const formData = {
      ...form.value,
      userId: userId,
      // Ensure the category is selected
      categoryId:
        categories.value.find((c) => c.name === form.value.category)?.id || null,
      createdAt: new Date(),
    };

    await addDoc(collection(db, "budgets"), formData);

    loading.value = false;
    console.log("Budget added successfully:", formData);
  } catch (error) {
    console.error("Error adding budget:", error);
  } finally {
    loading.value = false;
    resetForm();
    closeModal();
  }
};

const resetForm = () => {
  form.value = {
    amount: null,
    timePeriod: "monthly",
  };
};

const closeModal = () => {
  const modal = document.getElementById("add_budget");
  if (modal) {
    modal.close();
    loading.value = false;
  } else {
  }
};
</script>
<template>
  <dialog id="add_budget" class="modal">
    <div class="modal-box w-11/12 max-w-2xl">
      <div>
        <div class="flex items-center gap-1">
          <svg
            class="size-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"
            ></path>
          </svg>
          <h3 class="text-lg font-bold">Create New Budget</h3>
        </div>
        <p class="text-gray-500">
          Set up a new budget to track your spending in a specific category.
        </p>
      </div>
      <!-- Form for adding a new budget -->
      <form @submit.prevent="submitForm" method="post">
        <div class="mt-4 mb-4">
          <button
            type="button"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            @click="closeModal"
          >
            ✕
          </button>
        </div>
        <div class="mb-4 w-full">
          <div class="w-full">
            <label for="category" class="font-medium">Category</label>
            <select
              name="category"
              id="category"
              v-model="form.category"
              class="select select-bordered w-full mt-2"
              required
            >
              <option value="">Select Category</option>
              <option
                v-for="category in categories.filter((c) => c.type === 'expense')"
                :key="category.id"
                :value="category.name"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex items-center gap-3 w-full">
          <div class="w-full">
            <label for="amount" class="font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              v-model="form.amount"
              id="amount"
              class="input input-bordered w-full mt-2"
              placeholder="0.00"
              required
              min="0"
            />
          </div>
          <div class="w-full">
            <label for="period" class="font-medium">Time Period</label>
            <select
              name="period"
              id="period"
              v-model="form.timePeriod"
              class="select select-bordered w-full mt-2"
              required
            >
              <option value="" selected disabled>Select Period</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div class="flex gap-2 modal-action">
          <button type="button" @click="closeModal" class="btn">Close</button>
          <button :disabled="loading" class="btn btn-primary" type="submit">
            {{ loading ? "Creating..." : "Create Budget" }}
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>
