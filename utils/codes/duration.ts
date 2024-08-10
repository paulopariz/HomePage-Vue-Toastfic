/* eslint-disable quotes */
export const duration = `<Toast :duration="5000" />`;

export const durationOption = `<script setup lang="ts">
import { useToast } from "vue-toastfic";

function handle() {
  useToast.default("Duration: 10000", {
    duration: 10000,
  });
}
</script>`;
