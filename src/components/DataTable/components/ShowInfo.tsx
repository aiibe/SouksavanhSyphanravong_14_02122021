import { PropType } from "../types/ShowInfo";

function ShowInfo({ totalCount, showingCount, filterCount }: PropType) {
  return (
    <div role="status" aria-live="polite">
      Showing {showingCount > 0 ? 1 : 0} to{" "}
      {filterCount < showingCount && filterCount !== 0
        ? filterCount
        : showingCount}{" "}
      of {filterCount <= 0 ? totalCount : filterCount} entries{" "}
      {filterCount > 0 && `(filtered from ${totalCount} total entries)`}
    </div>
  );
}

ShowInfo.defaultProps = {
  total: 0,
  showing: 0,
};

export default ShowInfo;
