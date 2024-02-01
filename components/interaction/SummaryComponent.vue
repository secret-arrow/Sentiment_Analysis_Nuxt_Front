<template>
    <div class="w-full p-5 flex flex-row">
        <div class="w-full flex justify-between p-3 bg-gray-200 rounded-lg cursor-pointer">
            <div class="flex">
                <q-icon name="import_contacts" class="" size="md" />
                <p class="my-auto ml-3 pt-1">Call Summary (Click here)</p>
            </div>
            <q-icon name="keyboard_arrow_down" size="sm" class="my-auto"/>
        </div>
        <div class="w-full p-3">
            <div class="flex justify-between items-end mb-3">
                <p class="font-bold text-[16px] underline text-indigo-500">Call Activity</p>
                <q-btn no-caps class="bg-blue-400 text-white font-bold">Annotate</q-btn>
            </div>
            <div class="grid grid-cols-2 gap-x-2">
                <div class="flex font-semibold">
                    <p class="text-blue-800">Direction: </p>
                    <p class="text-gray-500 ml-2">inbounce</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Date: </p>
                    <p class="text-gray-500 ml-2">12.22.2023</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Family: </p>
                    <p class="text-gray-500 ml-2">Emerald</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Time: </p>
                    <p class="text-gray-500 ml-2">18:24</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Type: </p>
                    <p class="text-gray-500 ml-2">Balance Dispute</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Duration: </p>
                    <p class="text-gray-500 ml-2">12 min</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Reason: </p>
                    <p class="text-gray-500 ml-2">Break-down of service</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Top Keywords: </p>
                    <p class="text-gray-500 ml-2">Refund</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Customer MSISDN: </p>
                    <p class="text-gray-500 ml-2">0101001234</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">CSAT: </p>
                    <p class="text-gray-500 ml-2">Not Satisfied</p>
                </div>
                <div class="flex font-semibold">
                    <p class="text-blue-800">Agent NT Account: </p>
                    <p class="text-gray-500 ml-2">0987</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>