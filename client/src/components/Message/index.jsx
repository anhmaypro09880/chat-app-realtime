import React, { useEffect } from "react";
import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns/esm";
import "./style.css";

function formatDate(seconds) {
    let formattedDate = "";

    if (seconds) {
        formattedDate = formatRelative(new Date(seconds * 1000), new Date());

        formattedDate =
            formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
}

export default function Message({
    text,
    displayName,
    createdAt,
    photoURL,
    mesUid,
    messages,
    image,
}) {
    console.log("TExt inside" + text);
    const user = {
        uid: "123",
    };

    // const { myInfo } = useSelector((state) => state.auth);
    // console.log(myInfo);

    const handlePreviewImage = (e) => {
        const image = URL.createObjectURL();
    };
    return (
        <div className="message">
            <div className={`${user.uid === mesUid ? "m-msg" : "msg"}`}>
                <Avatar className="avatar" size="large" src={photoURL}>
                    {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
                <div className="content">
                    <Typography.Text className="message-author">
                        {displayName}
                    </Typography.Text>
                    <br />
                    <Typography.Text className="message-text">
                        {text === "" ? (
                            <div>
                                {/* <img src="blob:http://localhost:3000/3b86edce-11c4-4807-880c-9d9f5454684c"></img> */}
                                <img src={image} alt="image" />
                                {/* <p>{image}</p> */}
                            </div>
                        ) : (
                            text
                        )}

                        {/* {messages.map((m, index) => {
                                return (
                                    <div>
                                        {m.message === "" ? (
                                            <img
                                                style={{
                                                    height: 50,
                                                    width: 50,
                                                }}
                                                // src={`../../assets/images/${m.image}`}
                                                src={require(`../../assets/images/${m.image}`)}
                                                alt="image"
                                            />
                                        ) : (
                                            m.message
                                        )}
                                    </div>
                                );
                            })} */}

                        {/* {text === "" ? (
                                <img
                                  
                                    // src={require(`../../assets/images/${text}`)}
                                    alt="image"
                                />
                            ) : (
                                text
                            )} */}
                    </Typography.Text>
                    <br />
                    <Typography.Text className="message-date">
                        {createdAt}
                    </Typography.Text>
                </div>
            </div>
        </div>
    );
}
