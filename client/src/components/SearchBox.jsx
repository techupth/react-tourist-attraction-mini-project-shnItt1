import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchBox() {
  // state สำหรับรับค่า input
  const [searchText, setSearchText] = useState("");
  // state สำหรับรับ get data
  const [tripsData, setTripsData] = useState([]);

  // สร้าง useEffect เพื่อมาดักจับอีเว้นท์ที่จะขึ้นจากการ call data และ seacch text
  useEffect(() => {
    const getTripsData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/trips?keywords=${searchText}`
        );
        // console.log(response.data);
        console.log(response.data.data);
        setTripsData(response.data.data);
      } catch (error) {
        console.log("CALL DATA ERROR");
      }
    };
    if (searchText !== "") {
      getTripsData();
    } else {
      setSearchText([]);
    }
  }, [searchText]);
  // input ปุ่มเป็นstring ที่ใส่เข้ามา ต้องmap dataลงในcomponent ก่อน แล้วค่อยใส่keyword เอาไปเช็ค
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // สร้างเพื่อมารับ clipboard
  const handleCopyText = (tag) => {
    setSearchText(searchText == "" ? tag : searchText + " " + tag);
  };

  /*สร้างเพื่อมารับ clipboard มีvalue เป็น str ของ trips{tags} 
แล้วให้ส่ง valueไปวางในช่อง inputแล้วให้เสิชหาข้อมุลตามvalue*/

  const handleClipboard = () => {};

  return (
    <>
      <div className="title-box">
        <h1 className="first-title">เที่ยวไหนดี</h1>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="ค้นหาที่เที่ยว..."
            onChange={handleSearch}
            value={searchText}
          />
        </div>
        <p className="second-title">หาที่เที่ยวแล้วไปกัน...</p>
        <hr />
      </div>

      <section className="travel-list">
        {tripsData.map((item, index) => {
          return (
            <div className="travel-box" key={index}>
              <div className="travel-img">
                <img
                  className="pre-travel-img"
                  src={item.photos[0]}
                  alt="travel-img"
                />
              </div>
              <div className="travel-detail">
                <h2>{item.title}</h2>
                <p>{item.description.slice(0, 100)}...</p>
                <a href={item.url}>อ่านต่อ</a>
                <p>
                  หมวด
                  {item.tags.map((tag) => {
                    return (
                      <span
                        className="tag-span"
                        onClick={() => handleCopyText(tag)}
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </p>

                <div className="preview-box">
                  <img className="preview-img" src={item.photos[1]} alt="img" />
                  <img className="preview-img" src={item.photos[2]} alt="img" />
                  <img className="preview-img" src={item.photos[3]} alt="img" />
                  <div className="clipboard">
                    <a href={item.url} onClick={handleClipboard}>
                      <img
                        className="clipboard-icon"
                        src="https://placehold.co/100"
                        alt="link-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default SearchBox;
