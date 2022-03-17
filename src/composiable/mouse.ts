
import { ref, Ref, onMounted, onUnmounted } from "vue";

interface MousePointe {
    x: Ref<number>
    y: Ref<number>
}

export default function useMouse():MousePointe {
    const x = ref(0);
    const y = ref(0);

    function update(e:MouseEvent) {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    });

    return { x, y };
}