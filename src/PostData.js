import React from "react";
import "./PostData.css";
function PostData(props) {
    return (
        <div className="postData" >
            <img className="postData_banner" alt="1" src={require("./images/" + props.image)} />
            <div className="postData_contents" >
                <div className="postData_type" >
                    <h1>{props.postType}</h1>
                </div>

                <div className="postData_heading" >
                    <h1>{props.heading}</h1>
                </div>

                <div className="postData_content" >
                    <h1>{props.content}</h1>
                </div>


                <div className="postData_bottom" >
                    <div className="postData_writer" >
                        <img className="postData_writer_image" alt="1" src={require("./images/" + props.writerImage)} />
                        <h1>{props.writerName}</h1>
                    </div>

                    <h1>👁 {props.views}k views</h1>
                </div>
            </div>



        </div>
    );
}

export default PostData;