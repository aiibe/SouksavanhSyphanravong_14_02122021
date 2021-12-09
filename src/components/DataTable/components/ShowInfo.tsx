import { PropType } from "../types/ShowInfo";

function ShowInfo({ totalCount, showingCount, filterCount }: PropType) {
  return (
    <div role="status" aria-live="polite">
      Showing {showingCount > 0 ? 1 : 0} to {showingCount} of {totalCount}{" "}
      entries{" "}
      {filterCount > 0 && `(filtered from ${filterCount} total entries)`}
    </div>
  );
}

ShowInfo.defaultProps = {
  total: 0,
  showing: 0,
};

export default ShowInfo;
