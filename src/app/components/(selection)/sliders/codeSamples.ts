export const usageOneHandleCode = `import { Slider } from "@/shared/ui/Slider"
...
const [oneHandle, setOneHandle] = useState([30])
const [withMarks, setWithMarks] = useState([40])
...
return (
  <span>С меткой</span>
  <Slider value={oneHandle} onValueChange={setOneHandle} />

  <span>Без метки</span>
  <Slider defaultValue={[60]} showLabel={false} />

  <span>С делениями</span>
  <Slider
    value={withMarks}
    onValueChange={setWithMarks}
    withMarks={true}
    step={2}
    min={14}
    max={30}
  />
)`

export const usageTwoHandlesCode = `import { Slider } from "@/shared/ui/Slider"
...
const [twoHandles, setTwoHandles] = useState([10, 50])
const [twoWithMarks, setTwoWithMarks] = useState([18, 28])
...
return (
  <span>С метками</span>
  <Slider value={twoHandles} onValueChange={setTwoHandles} />

  <span>Без меток</span>
  <Slider defaultValue={[55, 95]} showLabel={false} />

  <span>С делениями</span>
  <Slider
    value={twoWithMarks}
    onValueChange={setTwoWithMarks}
    withMarks={true}
    step={2}
    min={14}
    max={30}
  />
)`