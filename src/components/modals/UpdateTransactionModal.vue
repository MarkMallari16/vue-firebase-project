<script setup>


const closeModal = () => {
    const modal = document.getElementById("update_transaction");
    if (modal) {
        modal.close();
    }
}
</script>
<template>
    <dialog id="update_transaction" class="modal">
        <div class="modal-box w-11/12 max-w-2xl">
            <h3 class="text-lg font-bold">Update Transaction</h3>
            <p class="text-gray-500">Update your transaction below.</p>
            <div>
                <form @form.prevent="">
                    <div class="mt-4 mb-10">
                        <button type="button" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            @click="closeModal">
                            ✕
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </dialog>

</template>