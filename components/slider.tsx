import { Slider } from "radix-ui";

export function SliderComponent({
  name,
  checkedStates,
}: {
  name: string;
  checkedStates: { [key: string]: boolean };
}) {
  const steps = 5;
  const max = 100;
  const stepSize = max / steps;
  return (
    <div hidden={!checkedStates[name]}>
      <p className="text-sm text-violet-700">{name}</p>
      <Slider.Root
        className="relative flex h-5 w-[200px] touch-none select-none content-center place-items-center"
        defaultValue={[0]}
        max={max}
        step={stepSize}
      >
        <Slider.Track className="relative h-3 grow rounded-full bg-[#EEE]">
          <Slider.Range className="absolute h-3 rounded-full bg-[#6E56CF]" />
          {Array.from({ length: steps - 1 }).map((_, index) => (
            <div
              key={index}
              className="absolute h-1 w-1 rounded-full bg-purple-300 inset-y-1"
              style={{
                left: `${(index / steps) * 100}%`,
                transform: "translateX(1000%)",
              }}
            />
          ))}
        </Slider.Track>
        <Slider.Thumb
          className="block border-3 border-purple-300/100 inset-y-0 size-4 rounded-full bg-[#6E56CF] shadow-[0_2px_10px] shadow-purple-950   hover:bg-violet3 focus: focus: focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  );
}
