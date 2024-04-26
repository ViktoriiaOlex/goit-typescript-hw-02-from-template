interface LoadMoreBtnProps {
  hasMore: boolean;
  onLoadMore: (searchQuery: string) => void;
  searchQuery: string;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  hasMore,
  onLoadMore,
  searchQuery,
}) => {
  const loadMore = () => {
    onLoadMore(searchQuery);
  };
  return (
    <div>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
