import { PropType } from "../types/Arrows";

function Arrows({ ascending, active }: PropType) {
  return (
    <span className="react-datatable__arrow-box">
      <i
        className="react-datatable__arrow react-datatable__arrow-up"
        style={{ opacity: active ? (ascending ? 1 : 0.2) : 1 }}
      ></i>
      <i
        className="react-datatable__arrow react-datatable__arrow-down"
        style={{ opacity: active ? (ascending ? 0.2 : 1) : 1 }}
      ></i>
    </span>
  );
}

export default Arrows;
