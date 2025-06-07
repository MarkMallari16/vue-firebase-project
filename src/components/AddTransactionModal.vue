<script setup>
import { db } from "@/collection/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import { ref } from "vue";
import { getAuth } from "firebase/auth";

const form = ref({
  type: "income",
  amount: null,
  date: "",
  description: "",
  category: "",
  paymentMethod: "Cash",
});

const resetForm = () => {
  form.value = {
    type: "income",
    amount: null,
    date: "",
    description: "",
    category: "",
    paymentMethod: "Cash",
  };
};
const submitForm = async () => {
  const auth = getAuth();

  try {
    const userRef = doc(db, "users", auth.currentUser.uid);
    const formData = {
      ...form.value,
      userId: auth.currentUser.uid,
      createdAt: new Date(),
    };
    await addDoc(collection(db, "transactions"), formData);
    alert("Transaction added successfully!");
    resetForm();
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    closeModal();
  }
};

const closeModal = () => {
  const modal = document.getElementById("add_transaction");
  if (modal) {
    modal.close();
  }
};
</script>
<template>
  <dialog id="add_transaction" class="modal">
    <div class="modal-box w-11/12 max-w-2xl">
      <h3 class="text-lg font-bold">Add New Transaction</h3>
      <p class="text-gray-500">Enter the details of your transaction below.</p>
      <div>
        <form @submit.prevent="submitForm" method="post">
          <div class="mt-4 mb-10">
            <p class="font-medium">Transaction Type</p>
            <div class="flex items-center gap-2 mt-2">
              <div class="flex items-center gap-2">
                <input
                  id="income"
                  type="radio"
                  name="type"
                  value="income"
                  v-model="form.type"
                  class="radio radio-primary radio-sm"
                  checked
                />
                <label for="income" class="font-sans">Income</label>
              </div>
              <div class="flex items-center gap-2">
                <input
                  id="expense"
                  type="radio"
                  name="type"
                  value="expense"
                  v-model="form.type"
                  class="radio radio-primary radio-sm"
                />
                <label for="expense" class="font-sans">Expense</label>
              </div>
            </div>
            <div class="flex items-center gap-5 mt-4 w-full">
              <div class="w-full">
                <label for="amount" class="font-medium mt-2">Amount</label>
                <input
                  id="amount"
                  type="number"
                  name="amount"
                  placeholder="Enter Amount"
                  v-model="form.amount"
                  required
                  class="mt-2 input input-secondary w-full"
                  min="0"
                />
              </div>

              <div class="w-full">
                <label for="date" class="font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  v-model="form.date"
                  required
                  class="mt-2 input input-secondary w-full"
                />
              </div>
            </div>
            <div class="mt-4">
              <label for="description" class="font-medium">Description</label>
              <input
                type="text"
                name="description"
                v-model="form.description"
                placeholder="Enter Description"
                required
                class="input mt-2 input-secondary w-full"
              />
            </div>
            <div class="mt-4">
              <div class="w-full flex items-center gap-5">
                <div class="w-full">
                  <p class="font-medium mb-2">Category</p>
                  <select
                    class="select select-secondary w-full"
                    name="category"
                    v-model="form.category"
                  >
                    <option disabled selected>Select Category</option>
                    <option>Food</option>
                    <option>Bills</option>
                    <option>Entertainment</option>
                    <option>Transportation</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <div class="w-full">
                  <p class="font-medium mb-2">Payment Method</p>
                  <select
                    class="select select-secondary w-full"
                    name="payment_method"
                    v-model="form.paymentMethod"
                  >
                    <option disabled>Select Payment Method</option>
                    <option selected>Cash</option>
                    <option>GCash</option>
                    <option>PayPal</option>
                    <option>Paymaya</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-2 modal-action">
            <button type="button" @click="closeModal" class="btn">Close</button>
            <button class="btn btn-primary" type="submit">Save Transaction</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>
