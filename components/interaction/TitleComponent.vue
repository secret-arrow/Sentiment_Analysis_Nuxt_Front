<template>
    <div class="w-full mt-3 p-3 pb-0">
            <div class="flex flex-column center ml-6">
                <q-icon name="call" color="green" size="md"/>
                <p class="text-green my-auto mr-3 text-[16px]">Inbound call</p>
                <p class="my-auto text-[16px]">86ccf9e375e4486bab06fg552r2d4c36</p>
                <q-icon name="content_copy" class="ml-2 my-auto cursor-pointer" size="sm"/>
            </div>
            <div class="flex">
                <q-icon name="navigate_before" class="my-auto cursor-pointer" size="md" @click="$router.push('/evaluation')"/>
                <div class="">
                    <p class="font-bold text-3xl pl-2 py-1">Julia Woolff's activity</p>
                    <p class="text-gray-500 pl-2">Recorded on Monday 21, 2022, 10:23 AM</p>
                </div>
            </div>
    </div>
</template>
<script setup>
</script>