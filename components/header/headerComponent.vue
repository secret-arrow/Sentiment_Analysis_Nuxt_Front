<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useRouter } from "vue-router";

const router = useRouter();

const { dark } = useQuasar();
dark.set(true);
</script>
<template>
    <QHeader class="bg-[#28025A] py-1 px-2">
        <QToolbar class="p-2 flex justify-between bg-transparent">
            <div class="flex flex-row bg-transparent flex-nowrap items-center">
                <div class="w-[30px] bg-transparent">
                    <QImg
                        class="cursor-pointer bg-transparent"
                        src="/imgs/header/avatar.png"
                        alt="menu"
                        @click="()=>router.push('/')"
                    />
                </div>
            </div>
        </QToolbar>
    </QHeader>
</template>
