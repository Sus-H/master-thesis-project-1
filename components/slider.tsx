import { Slider } from "radix-ui";

export default () => (
    <Slider.Root
    className="relative flex h-5 w-[200px] touch-none select-none items-center"
    defaultValue={[50]}
    max={100}
    step={10}
>
    <Slider.Track className="relative h-[3px] grow rounded-full bg-blackA7">
        <Slider.Range className="absolute h-full rounded-full bg-blue-300" />
    </Slider.Track>
    <Slider.Thumb
        className="block size-5 rounded-[10px] bg-blue shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
        aria-label="Volume"
    />
</Slider.Root>

);

export function SliderComponent({name} : {name: string}) {
    return (
        <div>
            <p>{name}</p>
            <Slider.Root
                className="relative flex h-5 w-[200px] touch-none select-none items-center"
                defaultValue={[50]}
                max={100}
                step={10}
            >
                <Slider.Track className="relative h-[3px] grow rounded-full bg-blackA7">
                    <Slider.Range className="absolute h-full rounded-full bg-amber-600" />
                </Slider.Track>
                <Slider.Thumb
                    className="block size-5 rounded-[10px] bg-blue shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                    aria-label="Volume"
                />
            </Slider.Root>
        </div>
    );
}
