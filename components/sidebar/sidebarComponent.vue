<template>
    <q-drawer
        show-if-above
        :width="270"
        :breakpoint="1064"
        bordered
        @click.capture="drawerClick"
        :mini="miniState"
        class="p-0 overflow-x-hidden bg-gray-200"
    >
        <q-list padding>
            <q-item 
                clickable 
                v-ripple 
                active-class="text-blue font-semibold"
                :active="route.path == '/'" 
                class="text-black text-lg" 
                @click="()=>router.push('/')"
            >
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>
            <q-item 
                clickable 
                v-ripple 
                active-class="text-blue font-semibold" 
                :active="route.path == '/search'" 
                class="text-black text-lg" 
                @click="()=>router.push('/search')"
            >
              <q-item-section avatar>
                <q-icon name="person_search" />
              </q-item-section>
              <q-item-section>
                Search
              </q-item-section>
            </q-item>
            <q-item 
                clickable 
                v-ripple 
                active-class="text-blue font-semibold" 
                :active="route.path == '/evaluation'" 
                class="text-black text-lg" 
                @click="()=>router.push('/evaluation')"
            >
              <q-item-section avatar>
                <q-icon name="view_list" />
              </q-item-section>
              <q-item-section>
                Evaluation
              </q-item-section>
            </q-item>
            <q-item 
                clickable 
                v-ripple 
                active-class="text-blue font-semibold" 
                :active="route.path == '/quality-management'" 
                class="text-black text-lg" 
                @click="()=>router.push('/quality-management')"
            >
              <q-item-section avatar>
                <q-icon name="manage_accounts"/>
              </q-item-section>
              <q-item-section>
                Quality Management
              </q-item-section>
            </q-item>
          </q-list>
        <div class="absolute" style="top: 25px; right: -17px">
            <q-icon 
                :name="miniState ? 'keyboard_arrow_right' : 'keyboard_arrow_left'" 
                size="md" 
                class="rounded-full bg-gray-200 text-gray-500 hover:text-black border-black hover:border-[1px]"
                @click="miniState = !miniState"
            />
        </div>
    </q-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();

const miniState = ref(false)
const drawerClick = (e) => {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation()
        }
      }
</script>