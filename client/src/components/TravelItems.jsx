import "../App.css";

// เดี๊ยวกลับมา refractor

function TravelItems(props) {
  const { title } = props;

  return (
    <>
      <section className="travel-list">
        <div className="travel-box">
          <div className="travel-img">
            <img src="https://placehold.co/300" alt="travel-img" />
          </div>
          <div className="travel-detail">
            <h2>Title:</h2>
            <p>Description</p>
            <a href="#">อ่านต่อ</a>
            <p>
              หมวด <a href="#">#เกาะ</a>
            </p>

            <div className="preview-box">
              <img className="preview-img" src="#" alt="img" />
              <img
                className="preview-img"
                src="https://placehold.co/150"
                alt="img"
              />
              <img
                className="preview-img"
                src="https://placehold.co/150"
                alt="img"
              />
              <div className="clipboard">
                <img
                  href="#"
                  className="clipboard-icon"
                  src="https://placehold.co/100"
                  alt="link-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelItems;
