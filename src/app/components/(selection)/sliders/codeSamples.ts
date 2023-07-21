export const usageCode = `import { Slider } from "@/shared/ui/Slider"
...
const [oneHandle, setOneHandle] = useState([30])
const [twoHandles, setTwoHandles] = useState([10, 50])
...
return (
  <div className="flex flex-col gap-3">
    <h3>С одним ползунком</h3>
    <div className="flex items-center justify-between w-[300px]">
      <span>С label</span>
      <Slider value={oneHandle} onValueChange={setOneHandle} />
    </div>

    <div className="flex items-center justify-between w-[300px]">
      <span>Без label</span>
      <Slider defaultValue={[60]} showLabel={false} />
    </div>

    <h3>С двумя ползунками</h3>
    <Slider value={twoHandles} onValueChange={setTwoHandles} />
  </div>
)`