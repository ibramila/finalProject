import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
function BestServices() {
  const URL = axios.create({
    baseURL: "http://localhost:8080",
  });
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    URL.get("/services").then((response) => {
      setPosts(response.data);
    });
  }, []);

  function handleFilter(e) {
    setFiltered(e.target.value);
  }

  return (
    <section className="services">
      <div className="container">
        <div className="best_services">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <hr
              style={{
                width: "10%",
                height: "2px",
                border: "none",
                background: "red",
              }}
            />
            <h3>OUR TOP SERVICES</h3>
          </div>
          <h1>Our Best Services</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <input
              type="text"
              placeholder="filter your data"
              onChange={handleFilter}
            />
          </div>
          <ul>
            {posts
              .filter((data) => {
                return filtered.trim().toLowerCase() === ""
                  ? data
                  : data.name.toLowerCase().includes(filtered.toLowerCase());
              })
              .map((post) => {
                return (
                  <li key={post._id}>
                    <h2>{post.name}</h2>
                    <p>{post.information}</p>
                    <button>delete</button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BestServices;
