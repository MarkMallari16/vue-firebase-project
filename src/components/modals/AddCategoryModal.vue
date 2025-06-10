<script setup>
import { db } from "@/collection/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { getAuth } from "firebase/auth";
const loading = ref(false);
const categories = ref([]);

onSnapshot(collection(db, "categories"), (snapshot) => {
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  console.log("Current user ID:", userId);
  if (userId) {
    categories.value = snapshot.docs
      .filter((doc) => doc.data().userId === userId)
      .map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
  }
});
console.log(categories.value);
const selectedIcon = ref({ name: "", svg: "" });

const form = ref({
  type: "income",
  name: "",
  icon: selectedIcon.value.name || "Select Icon",
  color: "Select Color",
});

// Reset form to initial state
const resetForm = () => {
  form.value = {
    type: "income",
    name: "",
    iconName: "Select Icon",
    color: "Select Color",
  };

  selectedIcon.value = { name: "", svg: "" };
};
// Reset form when the modal is closed
const submitForm = async () => {
  const auth = getAuth();
  try {
    loading.value = true;
    const formData = {
      ...form.value,
      userId: auth.currentUser.uid,
      createdAt: new Date(),
    };
    await addDoc(collection(db, "categories"), formData);

    console.log("Document successfully added!");
    loading.value = false;
    resetForm();
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    closeModal();
  }
};
// Function to close the modal and reset the form
const closeModal = () => {
  const modal = document.getElementById("add_category");
  if (modal) {
    modal.close();
    loading.value = false;
    resetForm();
  }
};

// Function to select an icon
const selectIcon = (icon) => {
  selectedIcon.value.name = icon.name;
  selectedIcon.value.svg = icon.icon;
  form.value.iconName = icon.name;
};

const icons = [
  {
    name: "Clothing",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M12.998 20H18.998V16H14.998V14H18.998V6H16.998V11L12.998 9.4V20ZM10.998 20V9.4L6.99805 11V6H4.99805V20H10.998ZM6.99805 4V3H16.998V4H19.998C20.5503 4 20.998 4.44772 20.998 5V21C20.998 21.5523 20.5503 22 19.998 22H3.99805C3.44576 22 2.99805 21.5523 2.99805 21V5C2.99805 4.44772 3.44576 4 3.99805 4H6.99805ZM11.998 8L15.498 5H8.49805L11.998 8Z"></path></svg>`,
  },
  {
    name: "Education",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
`,
  },
  {
    name: "Housing",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path></svg>`,
  },
  {
    name: "Food & Dining",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ><path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path></svg>`,
  },
  {
    name: "Shopping",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path></svg>`,
  },
  {
    name: "Healthcare",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M8 20V14H16V20H19V4H5V20H8ZM10 20H14V16H10V20ZM21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8V6H13V8H15V10H13V12H11V10H9V8H11Z"></path></svg>`,
  },
  {
    name: "Entertainment",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 5V19H16V5H8ZM4 5V7H6V5H4ZM18 5V7H20V5H18ZM4 9V11H6V9H4ZM18 9V11H20V9H18ZM4 13V15H6V13H4ZM18 13V15H20V13H18ZM4 17V19H6V17H4ZM18 17V19H20V17H18Z"></path></svg>`,
  },

  {
    name: "Travel",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
</svg>`,
  },
];
</script>
<template>
  <dialog id="add_category" class="modal">
    <div class="modal-box w-11/12 max-w-2xl">
      <h3 class="text-lg font-bold">Add New Category</h3>
      <p class="text-gray-500">Create a new category for your transactions.</p>
      <!---Preview-->
      <div
        class="flex justify-center items-center gap-3 mt-4 bg-gray-100 ring-1 ring-gray-300 rounded-lg p-4"
        v-if="form.name && selectedIcon.name && form.color !== 'Select Color'"
      >
        <div class="rounded-lg" :class="form.color">
          <div
            v-if="selectedIcon.name && selectedIcon.svg"
            v-html="selectedIcon.svg"
            class="text-white size-12 p-2"
          ></div>
        </div>
        <div>
          <h3 class="font-medium">{{ form.name }}</h3>
          <p class="text-gray-500 text-sm">{{ form.type }}</p>
        </div>
      </div>
      <div>
        <form @submit.prevent="submitForm" method="post">
          <div class="mt-4 mb-10">
            <button
              type="button"
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              @click="closeModal"
            >
              ✕
            </button>
            <p class="font-medium">Category Type</p>
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

            <div class="mt-4">
              <label for="category_name" class="font-medium">Category Name</label>
              <input
                id="category_name"
                type="text"
                v-model="form.name"
                placeholder="Enter Category Name"
                required
                class="input mt-2 input-bordered w-full"
              />
            </div>
            <div class="mt-4">
              <div class="w-full flex items-center gap-5">
                <div class="w-full">
                  <p class="font-medium mb-2">Icon</p>
                  <div class="dropdown dropdown-bottom dropdown-center w-full">
                    <div tabindex="0" role="button" class="btn m-1 w-full">
                      <div
                        class="flex items-center gap-1"
                        v-if="selectedIcon.name && selectedIcon.svg"
                      >
                        <span v-html="selectedIcon.svg" class="size-6"></span>
                        <p>{{ selectedIcon.name }}</p>
                      </div>
                      <div v-else>Select Icon</div>
                    </div>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-lg"
                    >
                      <li
                        v-for="icon in icons"
                        :key="icon.name"
                        @click="selectIcon(icon)"
                      >
                        <a>
                          <span v-html="icon.icon" class="size-6"></span>
                          {{ icon.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- Color Selection -->
                <div class="w-full">
                  <p class="font-medium mb-2">Color</p>
                  <select
                    class="select select-bordered w-full"
                    name="payment_method"
                    v-model="form.color"
                  >
                    <option disabled>Select Color</option>
                    <option selected value="bg-blue-500">Blue</option>
                    <option value="bg-green-500">Green</option>
                    <option value="bg-yellow-500">Yellow</option>
                    <option value="bg-teal-500">Teal</option>
                    <option value="bg-red-500">Red</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-2 modal-action">
            <button type="button" @click="closeModal" class="btn">Close</button>
            <button :disabled="loading" class="btn btn-primary" type="submit">
              {{ loading ? "Adding..." : "Add Category" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>
