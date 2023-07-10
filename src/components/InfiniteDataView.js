import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteDataView = observer(({ items }) => {
  useEffect(() => {
    items.fetchNewItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMore = () => {
    items.addPage();
    items.fetchNewItems();
  };

  return (
    <div style={{ padding: "10px" }}>
      <InfiniteScroll
        dataLength={items.data.length}
        next={handleMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.data.map((item, index) => {
          console.log(item.thumbnailUrl);
          return (
            <div
              style={{
                border: "1px solid lightgray",
                padding: "10px",
                marginBottom: "5px",
                borderRadius: "10px",
              }}
              key={index}
            >
              <p style={{ marginBottom: 10 }}>{`${index + 1}. ${
                item.title
              }`}</p>
              <img
                style={{ width: 150, height: 150 }}
                alt={item.title}
                src={item.thumbnailUrl}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
});
