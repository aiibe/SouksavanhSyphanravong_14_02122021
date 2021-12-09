import { PropType } from "../types/ShowInfo";

function ShowInfo({ total, showing }: PropType) {
  return (
    <div role="status" aria-live="polite">
      Showing {showing > 0 ? 1 : 0} to {showing} of {total} entries
    </div>
  );
}

ShowInfo.defaultProps = {
  total: 0,
  showing: 0,
};

export default ShowInfo;
