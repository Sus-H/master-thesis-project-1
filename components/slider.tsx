import { Slider } from "radix-ui";

export function SliderComponent({ name }: { name: string }) {
  const steps = 10;
  const max = 100;
  const stepSize = max / steps;
  return (
    <div>
      <p>{name}</p>
      <Slider.Root
        className="relative flex h-5 w-[200px] touch-none select-none items-center"
        defaultValue={[50]}
        max={max}
        step={stepSize}
      >
        <Slider.Track className="relative h-[10px] grow rounded-full bg-[#EEE]">
          <Slider.Range className="absolute h-2 rounded-full bg-[#6E56CF]" />
          {Array.from({ length: steps + 1 }).map((_, index) => (
            <div
              key={index}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                left: `${(index / steps) * 100}%`,
                transform: "translateX(-50%)",
              }}
            />
          ))}
        </Slider.Track>
        <Slider.Thumb
          className="block border-3 border-purple-300  size-5 rounded-full bg-[#6E56CF] shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus: focus: focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  );
}
