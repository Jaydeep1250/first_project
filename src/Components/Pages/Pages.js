import React, { useState, useEffect } from "react";
import axios from "axios";
import globeVar from "../../GlobeApi";
import parse from "html-react-parser";

function Pages() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //session call of cms_id
    const cms_id = sessionStorage.getItem("cms_id");
    // api of cms content
    axios
      .get(globeVar + `cms/${cms_id}`)
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.map((cms) => {
        return (
          <div key={cms.id}>
            <section className="breadcrumb-box">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-sm-auto">
                    <h1>{cms.title}</h1>
                  </div>
                </div>
              </div>
            </section>

            {parse(cms.content)}
          </div>
        );
      })}
    </div>
  );
}
export default Pages;
