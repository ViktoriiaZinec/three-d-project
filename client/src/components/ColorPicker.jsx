import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full m1-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ffffff",
          "#b950b9",
          "#18decb",
          "#3618de",
          "#7ede18",
          "#dc108def",
          "#dd6001",
          "#ec0808ef",
          "#18c4de",
          "#66655e",
          "#450639ef",
          "#000000",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
